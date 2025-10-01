export type TicketItem = {
  name: string;
  price: string | number;
};

type Ticket = TicketItem[]

export const ticketData: Ticket = [{
  name: "Overpriced WordPress theme",
  price: 199
}, {
  name: "Template that doesn't fit your brand",
  price: 159
}, {
  name: "SEO plugins that don't work",
  price: 69
}, {
  name: "Opaque hosting provider",
  price: 79
}, {
  name: "Plugin to make it work",
  price: 39
}, {
  name: "Freelancer to fix everything",
  price: 1599
}, {
  name: "Other plugin to fix it (again)",
  price: 39
}, {
  name: "Unclear maintenance costs",
  price: "49€/month"
}, {
  name: "Time lost",
  price: "too much"
}]