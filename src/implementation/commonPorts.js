// common network Ports
// used by the pcapImport

const commonPorts = {
  20: 'FTP Data',
  21: 'FTP Control',
  22: 'SSH',
  23: 'TELNET',
  25: 'SMTP',
  53: 'DNS',
  69: 'TFTP',
  80: 'HTTP',
  81: 'TOR',
  88: 'Kerberos',
  115: 'SFTP',
  118: 'SQL Server',
  443: 'HTTPS',
  513: 'rlogin',
  514: 'syslog',
  546: 'DHCP Client',
  547: 'DHCP Server',
  1194: 'Open VPN',
  8080: 'HTTP Proxy'
}

module.exports = commonPorts
