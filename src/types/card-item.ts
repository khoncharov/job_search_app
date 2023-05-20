export default interface Vacancy {
  id: number;
  profession: string;
  firmName: string;
  paymentFrom: number;
  paymentTo: number;
  currency: string;
  typeOfWork: string;
  location: string;
  description: string;
}
