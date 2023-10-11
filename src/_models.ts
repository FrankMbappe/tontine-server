type User = {
  id: string;
  phoneNumber: string;
  isPhoneNumberVerified: boolean;
  email: string;
  isEmailVerified: boolean;
  tontines: Tontine[];
};

type Tontine = {
  manager: User;
  createdAt: Date;
  name: string;
  description?: string;
  picUrl?: string;
  members: Member[];
  schedulingType: SchedulingType;
  contributionAmount: number;
};

type SchedulingType =
  | "firstSundayOfTheMonth"
  | "firstSaturdayOfTheMonth"
  | "custom";

type Member = {
  id: string;
  joinDate: Date;
  situation: MemberSituation;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber: string;
  picUrl?: string;
  role: MemberRole;
  user?: User;
  gainMeetings: Meeting[];
};

type MemberRole = "contributor" | "manager" | "assistantManager";

type MemberSituation = "active" | "suspended" | "left";

type Transaction = {
  meeting: Meeting;
  author: Member;
  recipient: Member;
  completedAt: Date;
  amount: number;
};

type Meeting = {
  startsAt: Date;
  host: Member;
  title?: string;
  description?: string;
  location?: string;
  participants: Member[];
  expectedEarnings: number;
  actualEarnings: number;
  contributionAmount: number;
  transactions: Transaction[];
  earner: Member;
};
