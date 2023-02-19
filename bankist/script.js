const account1 = {
  username: "pc",
  fname: "Preston",
  lname: "Cook",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: "1111",

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account2 = {
  username: "jd",
  fname: "Jessica",
  lname: "Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: "2222",

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-gb",
};

const accounts = [account1, account2];

/* Query for elements */
const app = document.querySelector(".app");
const accountBtn = document.querySelector(".login__input--user");
const accountPin = document.querySelector(".login__input--pin");
const loginBtn = document.querySelector(".login__btn");
const welcomeMsg = document.querySelector(".welcome");
const balanceVal = document.querySelector(".balance__value");
const cashInflow = document.querySelector(".summary__value--in");
const cashOutflow = document.querySelector(".summary__value--out");
const interestTotal = document.querySelector(".summary__value--interest");
const loginDate = document.querySelector(".date");
const movementContainer = document.querySelector(".movements");
const sortBtn = document.querySelector(".btn--sort");
const transferBtn = document.querySelector(".form__btn--transfer");
const transferRecipient = document.querySelector(".form__input--to");
const transferAmount = document.querySelector(".form__input--amount");
const requestBtn = document.querySelector(".form__btn--loan");
const requestAmount = document.querySelector(".form__input--loan-amount");
const closeBtn = document.querySelector(".form__btn--close");
const closeUsername = document.querySelector(".form__input--user");
const closePin = document.querySelector(".form__input--pin");
const timerLabel = document.querySelector(".timer");

let currentAccount, timer;

// Add event listener to login button to authenticate user
loginBtn.addEventListener("click", (e) => {
  // Prevent form from submitting
  e.preventDefault();  

  const registeredAccount = accounts.find(
    (user) => user.username === accountBtn.value
  );
  if (registeredAccount && registeredAccount.pin === accountPin.value) {
    loginUser(registeredAccount);
    currentAccount = registeredAccount;
  }
});

function loginUser(acc) {
  // Clear input fields
  accountBtn.value = "";
  accountPin.value = "";

  if (timer) {
    clearInterval(timer);
  }

  // Start log out timer
  timer = startLogoutTimer();

  // Get current time
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let portionOfDay;

  if (currentHour < 12) {
    portionOfDay = "Morning";
  } else if (currentHour < 18) {
    portionOfDay = "Afternoon";
  } else {
    portionOfDay = "Evening";
  }

  // Display welcome message
  welcomeMsg.textContent = `Good ${portionOfDay}, ${acc.fname}!`;

  // Update UI
  setBalance(acc);
  setInflow(acc);
  setOutflow(acc);
  setInterest(acc);
  displayMovements(acc, true);

  // Set login date
  loginDate.textContent = formatDate(acc.locale);

  // Display UI
  app.style.opacity = 100;
}

function initiateTransfer(acc, recipient, amount) {
  const transacDate = new Date().toISOString();

  // Log on current user's account
  acc.movements.push(-amount);
  acc.movementsDates.push(transacDate);

  // Log on recipient's account
  recipient.movements.push(amount);
  recipient.movementsDates.push(transacDate);
}

function initiateRequest(acc, amount) {
  const transacDate = new Date().toISOString();

  // Log transfer on current user's account
  acc.movements.push(amount);
  acc.movementsDates.push(transacDate);
}

// Add event listener to sort button
sortBtn.addEventListener("click", () => {
  displayMovements(currentAccount, false);
});

// Add event listener to transfer button
transferBtn.addEventListener("click", (e) => {
  // Prevent form submission
  e.preventDefault();

  const amount = +transferAmount.value;
  const recipient = accounts.find(
    (user) => user.username === transferRecipient.value
  );

  if (recipient && amount > 0 && amount <= calculateBalance(currentAccount)) {
    initiateTransfer(currentAccount, recipient, amount);
  }

  // Clear input fields
  transferRecipient.value = "";
  transferAmount.value = "";

  // Update UI components
  setBalance(currentAccount);
  setOutflow(currentAccount);
  displayMovements(currentAccount, true);

  // Restart timer
  clearInterval(timer);
  timerLabel.textContent = '10:00';
  startLogoutTimer();
});

// Add event listener to request button
requestBtn.addEventListener("click", (e) => {
  // Prevent form submission
  e.preventDefault();

  const amount = +requestAmount.value;

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      initiateRequest(currentAccount, amount);
      // Clear input fields
      requestAmount.value = "";

      // Update UI components
      setInflow(currentAccount);
      setBalance(currentAccount);
      displayMovements(currentAccount, true);
    }, 2500);
  }

  // Restart timer
  clearInterval(timer);
  timerLabel.textContent = '10:00';
  startLogoutTimer();
});

closeBtn.addEventListener("click", (e) => {
  // Prevent form submission
  e.preventDefault();

  const registeredAccount = accounts.find(
    (user) => user.username === closeUsername.value
  );

  if (registeredAccount && registeredAccount.pin === closePin.value) {
    closeAccount(currentAccount);
  }

  // Clear input fields
  closeUsername.value = "";
  closePin.value = "";

  // Restart timer
  clearInterval(timer);
  timerLabel.textContent = '10:00';
  startLogoutTimer();
});

function startLogoutTimer() {
  // Set time to 5 minutes
  let time = 599;

  // Call timer every second
  const timer = setInterval(() => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0); 
    timerLabel.textContent = `${min}:${sec}`;
    
    // Decrease time
    if (time === 0) {
      closeAccount(currentAccount);
    }

    time--;

  }, 1000)

  return timer;
}

function closeAccount(currentAccount) {

  // Fade Out UI
  app.style.opacity = 0;

  // Clear UI elements
  setTimeout(() => {
    movementContainer.innerHTML = "";
    welcomeMsg.textContent = "Log in to get started";
    loginDate.textContent = "";
    balanceVal.textContent = "";
    cashInflow.textContent = "";
    cashOutflow.textContent = "";
    interestTotal.textContent = "";
    timerLabel.textContent = "10:00";

    if (timer) {
      clearInterval(timer);
    }

    // Reset sorted state
    sorted = false;
  }, 1000);

  currentAccount = undefined;
}

// Store sorted state
let sorted = false;
function displayMovements(acc, isUpdate = false) {
  // Clear movement container
  movementContainer.innerHTML = "";
  const movs = [...acc.movements];

  // Check if not UI update
  if (!isUpdate) {
    sorted = !sorted;
  }

  // reverse array if
  sorted && movs.reverse();

  movs.forEach((mov, i) => {
    const transactionType = mov > 0 ? "deposit" : "withdrawal";
    const idx = sorted ? movs.length - (i + 1) : i;
    const timestamp = Date.parse(acc.movementsDates[idx]);
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${
      idx + 1
    } ${transactionType}</div>
          <div class="movements__date">${formatDate(
            acc.locale,
            timestamp,
            true
          )}</div>
          <div class="movements__value">${formatCurrency(
            acc.locale,
            acc.currency,
            mov
          )}</div>
        </div>
    `;
    movementContainer.insertAdjacentHTML("afterbegin", html);
  });
}

function setBalance(acc) {
  const totalBalance = calculateBalance(acc);
  balanceVal.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    totalBalance
  );
}

function setInflow(acc) {
  const totalInflow = calculateInflow(acc);
  cashInflow.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    totalInflow
  );
}

function setOutflow(acc) {
  const totalOutflow = calculateOutflow(acc);
  cashOutflow.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    totalOutflow
  );
}

function setInterest(acc) {
  const totalInterest = calculateInterest(acc);
  interestTotal.textContent = formatCurrency(
    acc.locale,
    acc.currency,
    totalInterest
  );
}

function calculateBalance(acc) {
  return acc.movements.reduce((total, cur) => total + cur, 0);
}

function calculateInflow(acc) {
  const inflow = acc.movements.filter((mov) => mov > 0);
  return inflow.reduce((total, cur) => total + cur, 0);
}

function calculateOutflow(acc) {
  const outflow = acc.movements.filter((mov) => mov < 0);
  return outflow.reduce((total, cur) => total + Math.abs(cur), 0);
}

function calculateInterest(acc) {
  return acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * (acc.interestRate / 100))
    .filter((int) => int > 1)
    .reduce((acc, cur) => acc + cur, 0);
}

function formatCurrency(locale, cur, val) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: cur,
  }).format(val);
}

function formatDate(locale, time = new Date(), isMovement = false) {
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  options = !isMovement
    ? { ...options, hour: "numeric", minute: "numeric" }
    : options;

  return new Intl.DateTimeFormat(locale, options).format(time);
}