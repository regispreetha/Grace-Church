export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  videoUrl?: string;
  audioUrl?: string;
  notesUrl?: string;
  scripture: string;
  description: string;
  thumbnail: string;
  livestream?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Kids' | 'Youth' | 'Community' | 'Worship' | 'Study';
  imageUrl: string;
  registrationLink?: string;
  leadBy?: string;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  leader: string;
  contactEmail: string;
  meetingDay: string;
  meetingTime: string;
  imageUrl: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChurchInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  serviceTime: string;
  facebook: string;
  instagram: string;
  youtube: string;
}
