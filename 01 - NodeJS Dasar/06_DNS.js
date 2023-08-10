// DNS Promises
// DNS promises API

import dns from "dns/promises";

// Class: dnsPromises.Resolver;
// resolver.cancel();
// dnsPromises.getServers();
const ip = await dns.lookup("www.youtube.com");

console.log(ip);
// dns.lookupService(address, port);
// dns.resolve(hostname[(params, rrtype)]);
// dns.resolve4(hostname[(params, options)]);
// dns.resolve6(hostname[(params, options)]);
// dns.resolveAny(hostname);
// dns.resolveCaa(hostname);
// dns.resolveCname(hostname);
// dns.resolveMx(hostname);
// dns.resolveNaptr(hostname);
// dns.resolveNs(hostname);
// dns.resolvePtr(hostname);
// dns.resolveSoa(hostname);
// dns.resolveSrv(hostname);
// dns.resolveTxt(hostname);
// dns.reverse(ip);
// dns.setDefaultResultOrder(order);
// dns.getDefaultResultOrder();
// dns.setServers(servers);
