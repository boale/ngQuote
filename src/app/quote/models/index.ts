export interface Quote {
  author: string;
  text: string;
  source?: string;
  tags?: string[];
}

export interface EmailContact {
  email: string;
}

export interface PhoneContact {
  phone: string;
}

export type ContactData = EmailContact | PhoneContact;
