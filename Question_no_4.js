const dns = require('dns');

// Resolve a domain name
dns.resolve4('www.example.com', (err, addresses) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('IP addresses:', addresses);
});

// Reverse lookup
dns.reverse('8.8.8.8', (err, hostnames) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Reverse lookup: ', hostnames);
});
