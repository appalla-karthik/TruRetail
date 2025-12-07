import fs from "fs";
import path from "path";
import csv from "csv-parser";
const data = [];


export const getAllSalesData = () => {
  if (data.length > 0) return data;

  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "sales-data.csv"
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found at ${filePath}`);
  }

  const rows = fs
    .createReadStream(filePath)
    .pipe(csv());

  return new Promise((resolve, reject) => {
    rows
      .on("data", (row) => {
        data.push({
          transactionId: row["Transaction ID"],
          date: new Date(row["Date"]),
          customerId: row["Customer ID"],
          customerName: row["Customer Name"],
          phoneNumber: row["Phone Number"],
          gender: row["Gender"],
          age: Number(row["Age"]),
          customerRegion: row["Customer Region"],
          productCategory: row["Product Category"],
          quantity: Number(row["Quantity"]),
          totalAmount: Number(row["Total Amount"]),
          discount: Number(row["Discount Percentage"]),
          paymentMethod: row["Payment Method"],
          tags: row["Tags"] ? row["Tags"].split(",") : [],
        });
      })
      .on("end", () => resolve(data))
      .on("error", reject);
  });
};
