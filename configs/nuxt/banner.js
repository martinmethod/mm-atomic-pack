export default ({ title, homepage, author, version }) => `
 • ${title || name} (v${version})
   ${homepage}
   Copyright © ${new Date().getFullYear()} ${author.name}
   
 • ${author.name}
   ${author.email}
   ${author.url}
   
 • Last update: ${new Date().toDateString()}
`;
