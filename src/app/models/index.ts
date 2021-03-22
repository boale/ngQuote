export interface Quote {
  id: string;
  author: string;
  text: string;
  isDeleted?: boolean;
  source?: string;
  tags?: string;
}

export interface EmailContact {
  email: string;
}

export interface PhoneContact {
  phone: string;
}

export type ContactData = EmailContact | PhoneContact;

export interface ApiResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
}

export interface AuthData {
  token_type: string;
  access_token: string;
}
