const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30;";

const arr = [];

flights.split("+").forEach((elm) => {
  const pieces = elm.split(";");
  const [status, origin, destination, time] = pieces;
  const formattedStatus = status.slice(1).split("_").join(" ");
  const formattedOrigin = origin.slice(0, 3).toUpperCase();
  const formattedDestination = destination.slice(0, 3).toUpperCase();
  const formattedTime = time.replace(":", "h");

  arr.push(
    `${
      formattedStatus.includes("Delayed") ? "🔴" : ""
    } ${formattedStatus} from ${formattedOrigin} to ${formattedDestination} (${formattedTime})`
  );
});

const maxLength = Math.max(...arr.map((elm) => elm.length));

arr.forEach((elm) => {
  console.log(elm.padStart(maxLength));
});