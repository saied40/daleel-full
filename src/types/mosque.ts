export default interface Mosque {
  id: number;
  slug: string; // the name of the mosque in English lowercase and without spaces
  name: string;
  address: string;
  phones?: {
    id: number;
    name: string; // can be empty string
    number: string; // Egyptian phone number
  }[];
  location?: {
    url?: string;
    iframe?: string;
  };
};
