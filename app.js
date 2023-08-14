const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

  const users = [
    {
      id: 1,
      name: "John Doe",
      phone: "+1234567890",
      address: "123 Main Street",
      country: "United States"
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+1987654321",
      address: "456 Oak Avenue",
      country: "Canada"
    },
    {
      id: 3,
      name: "Michael Johnson",
      phone: "+1123456789",
      address: "789 Elm Road",
      country: "United Kingdom"
    },
    {
      id: 4,
      name: "Emily Brown",
      phone: "+2233445566",
      address: "101 Pine Lane",
      country: "Australia"
    },
    {
      id: 5,
      name: "William Lee",
      phone: "+4498765432",
      address: "222 Cedar Street",
      country: "Germany"
    },
    {
      id: 6,
      name: "Sophia Kim",
      phone: "+5566778899",
      address: "333 Maple Drive",
      country: "France"
    },
    {
      id: 7,
      name: "James Wilson",
      phone: "+6677889900",
      address: "444 Birch Court",
      country: "Italy"
    },
    {
      id: 8,
      name: "Olivia Anderson",
      phone: "+7788990011",
      address: "555 Ash Avenue",
      country: "Spain"
    },
    {
      id: 9,
      name: "Robert Martinez",
      phone: "+8899001122",
      address: "666 Pine Road",
      country: "Japan"
    },
    {
      id: 10,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "777 Elm Lane",
      country: "China"
    },
    {
      id: 11,
      name: "David Hernandez",
      phone: "+0011223344",
      address: "888 Oak Court",
      country: "Brazil"
    },
    {
      id: 12,
      name: "Emma Wilson",
      phone: "+9988776655",
      address: "123 Cedar Avenue",
      country: "United States"
    },
    {
      id: 13,
      name: "Noah Brown",
      phone: "+4455667788",
      address: "456 Elm Street",
      country: "Canada"
    },
    {
      id: 14,
      name: "Olivia Johnson",
      phone: "+3344556677",
      address: "789 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 15,
      name: "Sophia Lee",
      phone: "+7766554433",
      address: "101 Birch Road",
      country: "Australia"
    },
    {
      id: 16,
      name: "Liam Kim",
      phone: "+1122334455",
      address: "222 Maple Court",
      country: "Germany"
    },
    {
      id: 17,
      name: "William Wilson",
      phone: "+6677889900",
      address: "333 Pine Drive",
      country: "France"
    },
    {
      id: 18,
      name: "Olivia Davis",
      phone: "+8899001122",
      address: "444 Cedar Lane",
      country: "Italy"
    },
    {
      id: 19,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "555 Elm Avenue",
      country: "Spain"
    },
    {
      id: 20,
      name: "James Martinez",
      phone: "+6677889900",
      address: "666 Oak Road",
      country: "Japan"
    },
    {
      id: 21,
      name: "Emma Wilson",
      phone: "+9988776655",
      address: "777 Birch Lane",
      country: "China"
    },
    {
      id: 22,
      name: "Oliver Hernandez",
      phone: "+0011223344",
      address: "888 Maple Drive",
      country: "Brazil"
    },
    {
      id: 23,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "999 Pine Avenue",
      country: "United States"
    },
    {
      id: 24,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 25,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 26,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 27,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 28,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 29,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 30,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 31,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 32,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 33,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 34,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    },
    {
      id: 35,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 36,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 37,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 38,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 39,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 40,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 41,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 42,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 43,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 44,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 45,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    },
    {
      id: 46,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 47,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 48,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 49,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 50,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 51,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 52,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 53,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 54,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 55,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 56,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    },
    {
      id: 57,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 58,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 59,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 60,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 61,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 62,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 63,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 64,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 65,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 66,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 67,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    },
    {
      id: 68,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 69,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 70,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 71,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 72,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 73,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 74,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 75,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 76,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 77,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 78,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    },
    {
      id: 79,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 80,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 81,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 82,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 83,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 84,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 85,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 86,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 87,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 88,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 89,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    },
    {
      id: 90,
      name: "Emma Brown",
      phone: "+4455667788",
      address: "123 Elm Street",
      country: "Canada"
    },
    {
      id: 91,
      name: "Oliver Johnson",
      phone: "+3344556677",
      address: "456 Oak Lane",
      country: "United Kingdom"
    },
    {
      id: 92,
      name: "Sophia Kim",
      phone: "+7766554433",
      address: "789 Birch Road",
      country: "Australia"
    },
    {
      id: 93,
      name: "Liam Lee",
      phone: "+1122334455",
      address: "101 Cedar Drive",
      country: "Germany"
    },
    {
      id: 94,
      name: "William Wilson",
      phone: "+6677889900",
      address: "222 Maple Lane",
      country: "France"
    },
    {
      id: 95,
      name: "Oliver Davis",
      phone: "+8899001122",
      address: "333 Pine Avenue",
      country: "Italy"
    },
    {
      id: 96,
      name: "Ava Rodriguez",
      phone: "+9900112233",
      address: "444 Elm Road",
      country: "Spain"
    },
    {
      id: 97,
      name: "Emma Martinez",
      phone: "+6677889900",
      address: "555 Cedar Street",
      country: "Japan"
    },
    {
      id: 98,
      name: "Oliver Wilson",
      phone: "+9988776655",
      address: "666 Birch Lane",
      country: "China"
    },
    {
      id: 99,
      name: "William Hernandez",
      phone: "+0011223344",
      address: "777 Maple Drive",
      country: "Brazil"
    },
    {
      id: 100,
      name: "Sophia Wilson",
      phone: "+1122334455",
      address: "888 Pine Road",
      country: "United States"
    }
  ]

   app.get('/', function (req, res) { 
     res.send(users);
});