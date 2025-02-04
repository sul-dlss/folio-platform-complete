module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    welcomeMessage: 'FOLIO STAGE Quesnelia CSP 6 - Stanford University',
    platformName: 'FOLIO Stage - Quesnelia CSP 8',
    helpUrl: 'https://sites.google.com/stanford.edu/folio-training-central/help',
    showPerms: false,
    preserveConsole: true,
    useSecureTokens: false,
  },
  modules: {
    '@folio/acquisition-units': {},
    '@folio/agreements': {},
    '@folio/bulk-edit': {},
    '@folio/calendar' : {},
    '@folio/checkin' : {},
    '@folio/checkout' : {},
    '@folio/circulation' : {},
    '@folio/circulation-log' : {},
    '@folio/courses' : {},
    '@folio/dashboard': {},
    '@folio/data-export' : {},
    '@folio/data-import' : {},
    '@folio/developer' : {},
    '@folio/erm-comparisons' : {},
    '@folio/erm-usage': {},
    '@folio/eholdings' : {},
    '@folio/export-manager': {},
    '@folio/finance' : {},
    "@folio/gobi-settings": {},
    '@folio/handler-stripes-registry': {},
    '@folio/inventory' : {},
    '@folio/invoice': {},
    '@folio/ldp': {},
    '@folio/licenses': {},
    '@folio/lists': {},
    '@folio/local-kb-admin': {},
    '@folio/marc-authorities': {},
    '@folio/myprofile' : {},
    '@folio/notes' : {},
    '@folio/oai-pmh' : {},
    '@folio/orders': {},
    '@folio/organizations' : {},
    '@folio/plugin-bursar-export' : {},
    '@folio/plugin-create-inventory-records' : {},
    '@folio/plugin-find-agreement': {},
    '@folio/plugin-find-authority' : {},
    '@folio/plugin-find-contact': {},
    '@folio/plugin-find-eresource': {},
    '@folio/plugin-find-erm-usage-data-provider': {},
    '@folio/plugin-find-fund': {},
    '@folio/plugin-find-import-profile' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-interface' : {},
    '@folio/plugin-find-license': {},
    '@folio/plugin-find-organization': {},
    '@folio/plugin-find-package-title': {},
    '@folio/plugin-find-po-line': {},
    '@folio/plugin-find-user' : {},
    '@folio/plugin-query-builder' : {},
    '@folio/quick-marc': {},
    '@folio/receiving' : {},
    '@folio/requests' : {},
    '@folio/servicepoints' : {},
    '@folio/service-interaction': {},
    '@folio/plugin-eusage-reports': {},
    '@folio/stripes-authority-components' : {},
    '@folio/stripes-erm-components': {},
    '@folio/tags': {},
    '@folio/tenant-settings' : {},
    '@folio/users' : {},
    '@folio/serials-management' : {},
    '@folio/stripes-marc-components' : {}
  },
  branding: {
    logo: {
      src: './tenant-assets/SUSig_2color_Stree_StnfrdOnly_Left.png',
      alt: 'Stanford University',      
    },
    favicon: {
      src: './tenant-assets/stanford-favicon.png',
    },
  }
};