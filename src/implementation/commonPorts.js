// common network Ports
// used by the pcapImport

const commonPorts = {
  20: 'FTP Data',
  21: 'FTP Control',
  22: 'SSH',
  23: 'TELNET',
  25: 'SMTP',
  53: 'DNS',
  67: 'bootp server',
  68: 'bootp server',
  69: 'TFTP',
  80: 'HTTP',
  81: 'TOR',
  88: 'Kerberos',
  115: 'SFTP',
  118: 'SQL Server',
  128: 'gss-xlicen',
  135: 'loc-srv',
  150: 'sql-net',
  443: 'HTTPS',
  513: 'rlogin',
  514: 'syslog',
  546: 'DHCP Client',
  547: 'DHCP Server',
  1060: 'polestar',
  1101: 'pt2-discover or threat',
  1194: 'Open VPN',
  1492: 'stone-design-1 or trojan',
  1493: 'netmap_lm',
  1606: 'slm-api',
  1988: 'tr-rsrb-p2',
  1989: 'tr-rsrb-p3',
  2555: 'compaq-wcp or trojan',
  2559: 'lstp',
  2826: 'slc-systemlog',
  2828: 'slc-ctrlrloops',
  2829: 'silkp1',
  5357: 'wsdapi',
  8080: 'HTTP Proxy'
}

module.exports = commonPorts
