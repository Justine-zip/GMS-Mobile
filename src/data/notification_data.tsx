import { CircleAlert, CreditCard, Crown, Dumbbell, UserRound, UsersRound } from "lucide-react-native";

export const notificationData = [
    {
        icon: Crown,
        header: 'Membership Renewal Due Soon',
        description: 'Your premium membership will expire on March 1, 2026. Renew now to avoid any interruption in your benefits.',
        time: '1 hour ago',
        isNew: true,
        iconColor: '#FFA90B',
    },
    {
        icon: CreditCard,
        header: 'Payment Method Update Required',
        description: 'Your saved payment method is expiring soon. Update it now to ensure uninterrupted service.',
        time: '2 hour ago',
        isNew: true,
        iconColor: '#00A535',
    },
    {
        icon: UsersRound,
        header: 'New Feature Alert: Member Forums',
        description: 'We’ve launched new member-exclusive forums! Connect with fellow members and join the conversation today.',
        time: '1 month ago',
        isNew: false,
        iconColor: '#146EF5',
    },
    {
        icon: UserRound,
        header: 'Profile Updated',
        description: 'Your profile is successfully updated',
        time: '2 months ago',
        isNew: false,
        iconColor: '#00A535',
    },
    {
        icon: CircleAlert,
        header: 'Membership Expired',
        description: 'Your basic membership expired on June 20, 2024. Please renew to continue enjoying our services.',
        time: '2 years ago',
        isNew: false,
        iconColor: '#F03324',
    },
    {
        icon: Dumbbell,
        header: 'Welcome to Our Community!',
        description: 'Thank you for joining! Explore your dashboard to get started and discover all the benefits of your membership.',
        time: '2 years ago',
        isNew: false,
        iconColor: '#146EF5',
    },
]