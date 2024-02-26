import tripData from "../types/trips";

export function convertDate(rowDate: string | number | Date) {
  const date = new Date(rowDate);
  return date ? date.toLocaleDateString() : "";
}

export function sortByDate(arrayData: tripData[], asc = false) {
  const arr1 = arrayData.map((obj: tripData) => {
    if (obj) {
      return { ...obj, checkInDate: new Date(obj?.checkInDate) };
    }
  });
  const sortedAsc = arr1.sort(
    (objA, objB) =>
      Number(asc ? objA?.checkInDate : objB?.checkInDate) -
      Number(asc ? objB?.checkInDate : objA?.checkInDate)
  );
  return sortedAsc;
}
