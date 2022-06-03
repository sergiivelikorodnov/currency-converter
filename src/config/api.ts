export const API_KEY = "m409XzLNTZAmVYXLmz7SkmUf3XCvGf9N";
export const API_DOMAIN =
  "https://api.apilayer.com/exchangerates_data/convert?";

const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

export const requestOptions = {
  method: "GET",
  redirect: "follow" as RequestRedirect,
  headers: myHeaders,
};

export const endpointPath = (from: string, to: string, amount: string) =>
  `${API_DOMAIN}to=${to}&from=${from}&amount=${amount}`;
