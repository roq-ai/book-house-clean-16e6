interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Cleaning Staff'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Cleaning Staff', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Book House Cleaning Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Book appointments',
    'View service details',
    'View appointment status',
  ],
  ownerAbilities: ['Manage tasks', 'Read appointment details', 'Read service details', 'Read staff details'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1461897c-396a-4cf8-a853-6053525cf72d',
};
