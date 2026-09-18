import { SeedItem, DecorationItem } from '../types';

export const SEEDS: SeedItem[] = [
  {
    id: 'seed-carrot',
    name: 'Hạt cà rốt',
    buyPrice: 15,
    harvestProfit: 5,
    harvestTotal: 20, // 15 vốn + 5 lãi
    growthMinutes: 20,
    icon: '🥕',
    levelRequired: 1,
    description: 'Cây cà rốt dễ trồng, thích hợp cho người mới bắt đầu.',
    color: '#f97316',
  },
  {
    id: 'seed-strawberry',
    name: 'Hạt dâu tây',
    buyPrice: 30,
    harvestProfit: 15,
    harvestTotal: 45,
    growthMinutes: 20,
    icon: '🍓',
    levelRequired: 1,
    description: 'Dâu tây đỏ mọng ngọt lịm mang lại quả thu hoạch tươi ngon.',
    color: '#ef4444',
  },
  {
    id: 'seed-blueberry',
    name: 'Hạt việt quất',
    buyPrice: 30,
    harvestProfit: 20,
    harvestTotal: 50,
    growthMinutes: 20,
    icon: '🫐',
    levelRequired: 2,
    description: 'Việt quất mọng nước tím biếc, giàu vitamin và điểm thưởng.',
    color: '#3b82f6',
  },
  {
    id: 'seed-tomato',
    name: 'Hạt cà chua',
    buyPrice: 40,
    harvestProfit: 25,
    harvestTotal: 65,
    growthMinutes: 20,
    icon: '🍅',
    levelRequired: 2,
    description: 'Cà chua chín đỏ trĩu cành, sinh sôi xanh mướt trong vườn.',
    color: '#dc2626',
  },
  {
    id: 'seed-corn',
    name: 'Hạt ngô (bắp)',
    buyPrice: 45,
    harvestProfit: 25,
    harvestTotal: 70,
    growthMinutes: 20,
    icon: '🌽',
    levelRequired: 3,
    description: 'Ngô vàng óng ả vươn cao đón nắng ấm ban mai.',
    color: '#eab308',
  },
  {
    id: 'seed-sunflower',
    name: 'Hạt hoa hướng dương',
    buyPrice: 50,
    harvestProfit: 30,
    harvestTotal: 80,
    growthMinutes: 20,
    icon: '🌻',
    levelRequired: 3,
    description: 'Bông hoa hướng dương rực rỡ mang lại niềm vui học tập.',
    color: '#f59e0b',
  },
  {
    id: 'seed-willow',
    name: 'Hạt liễu cảnh',
    buyPrice: 80,
    harvestProfit: 50,
    harvestTotal: 130,
    growthMinutes: 20,
    icon: '🌿',
    levelRequired: 4,
    description: 'Cây liễu thướt tha, cành lá rủ mềm xanh mát một góc vườn.',
    color: '#10b981',
  },
  {
    id: 'seed-pumpkin',
    name: 'Hạt bí đỏ khổng lồ',
    buyPrice: 100,
    harvestProfit: 80,
    harvestTotal: 180,
    growthMinutes: 20,
    icon: '🎃',
    levelRequired: 5,
    description: 'Bí đỏ vàng cam trĩu nặng, thu về lợi nhuận cực lớn cho nhà nông!',
    color: '#ea580c',
  }
];

export const DECORATIONS: DecorationItem[] = [
  {
    id: 'dec-flower',
    name: 'Khóm hoa ngũ sắc',
    price: 15,
    icon: '🌸',
    type: 'flower',
    description: 'Hoa nở rực rỡ, điểm tô thêm sắc màu cho lối đi trong vườn.'
  },
  {
    id: 'dec-fence',
    name: 'Hàng rào gỗ mộc',
    price: 30,
    icon: '🪵',
    type: 'fence',
    description: 'Hàng rào gỗ xinh xắn bao quanh luống rau củ an toàn.'
  },
  {
    id: 'dec-bench',
    name: 'Ghế đá nghỉ chân',
    price: 30,
    icon: '🪑',
    type: 'bench',
    description: 'Nơi ngồi đọc sách giải toán và ngắm vườn cây nở hoa.'
  },
  {
    id: 'dec-lamp',
    name: 'Đèn năng lượng khu vườn',
    price: 40,
    icon: '🏮',
    type: 'lamp',
    description: 'Đèn ấm áp chiếu sáng khu vườn lung linh khi hoàng hôn xuống.'
  },
  {
    id: 'dec-pond',
    name: 'Hồ nước cá cảnh & hoa sen',
    price: 60,
    icon: '🌊',
    type: 'pond',
    description: 'Hồ nước trong veo mát lành với cá tung tăng bơi lội.'
  }
];

export const DEFAULT_AVATARS = [
  { id: 'av-1', label: 'Bé mầm xanh', emoji: '🌱' },
  { id: 'av-2', label: 'Bé dâu tây', emoji: '🍓' },
  { id: 'av-3', label: 'Nhà làm vườn vui vẻ', emoji: '🧑‍🌾' },
  { id: 'av-4', label: 'Ong chăm chỉ', emoji: '🐝' },
  { id: 'av-5', label: 'Mèo làm nông', emoji: '🐱' },
  { id: 'av-6', label: 'Bướm xuân', emoji: '🦋' },
  { id: 'av-7', label: 'Thỏ thông thái', emoji: '🐰' },
  { id: 'av-8', label: 'Cú thông thái', emoji: '🦉' },
];
