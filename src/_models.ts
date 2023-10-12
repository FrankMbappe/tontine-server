type User = {
  id: string;
  phoneNumber: string;
  phoneNumberVerified?: Date;
  email: string;
  emailVerified?: Date;
  picUrl?: string;
  tontines: Tontine[];
};

type Model = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

type Tontine = Model & {
  name: string;
  description?: string;
  manager: User;
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
