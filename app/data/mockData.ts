
export const mockUsers = [
  {
    id: '1',
    name: 'Mira Celeste',
    avatar: '/images/profile-1.png',
    lastMessage: 'had dinner???',
    timestamp: '07:30:46 AM',
    isOnline: true,
  },
  { 
    id: '2',
    name: 'Seraphina Hart',
    avatar: '/images/profile-2.png',
    lastMessage: 'What are doing',
    timestamp: 'Yesterday',
  },
  {
    id: '3',
    name: 'Aurora Belle',
    avatar: '/images/profile-3.png',
    lastMessage: "Let's catchup",
    timestamp: '03 Sep 2024',
  },
  {
    id: '4',
    name: 'Luna Everly',
    avatar: '/images/profile-4.png',
    lastMessage: '✓ How are you',
    timestamp: '02 Sep 2024',
  },
  {
    id: '5',
    name: 'James Wilson',
    avatar: '/images/profile-5.png',
    lastMessage: 'Cool! See you tomorrow',
    timestamp: '01 Sep 2024',
  },

  
];

export const mockMessages = {
  '1': [
    {
      id: '1-1',
      text: 'Hi',
      sentByMe: false,
      timestamp: '10:30 AM',
    },
    {
      id: '1-2',
      text: 'Hello',
      sentByMe: true,
      timestamp: '10:31 AM',
    },
    {
      id: '1-3',
      text: 'How are you doing?',
      sentByMe: false,
      timestamp: '10:32 AM',
    },
    {
      id: '1-4',
      text: 'I am doing good',
      sentByMe: true,
      timestamp: '10:33 AM',
    },
    {
      id: '1-5',
      text: '& you?',
      sentByMe: true,
      timestamp: '10:33 AM',
    },
    {
      id: '1-6',
      text: 'I am also doing good',
      sentByMe: false,
      timestamp: '10:34 AM',
    },
    {
      id: '1-7',
      text: "What's up",
      sentByMe: false,
      timestamp: '10:35 AM',
    },
  ],
  '2': [
    {
      id: '2-1',
      text: 'Hey there!',
      sentByMe: false,
      timestamp: 'Yesterday',
    },
    {
      id: '2-2',
      text: 'Hi! How are you?',
      sentByMe: true,
      timestamp: 'Yesterday',
    },
    {
      id: '2-3',
      text: 'What are doing',
      sentByMe: false,
      timestamp: 'Yesterday',
    },
  ],
  '3': [
    {
      id: '3-1',
      text: "Let's catchup",
      sentByMe: false,
      timestamp: '03 Sep 2024',
    },
  ],
  '4': [
    {
      id: '4-1',
      text: 'How are you',
      sentByMe: false,
      timestamp: '02 Sep 2024',
    },
  ],
  '5': [
    {
      id: '5-1',
      text: 'Are we still on for tomorrow?',
      sentByMe: true,
      timestamp: '01 Sep 2024',
    },
    {
      id: '5-2',
      text: 'Yes, definitely!',
      sentByMe: false,
      timestamp: '01 Sep 2024',
    },
    {
      id: '5-3',
      text: 'Cool! See you tomorrow',
      sentByMe: false,
      timestamp: '01 Sep 2024',
    },
  ],
};