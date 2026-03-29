let donations = [];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    const donation = {
      id: Date.now().toString(),
      nama: data.name  "Anonymous",
      amount: Number(data.amount) 
 0,
      message: data.message  "",
      email: data.email 
 "",
      timestamp: new Date().toISOString()
    };

    donations.push(donation);

    console.log("💰 Donation masuk:", donation);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
📡 5. Endpoint untuk Roblox ambil data

File: /api/sociabuzz/get-donations.js

let donations = [];

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data = [...donations];

  // Kosongkan setelah diambil (biar tidak double)
  donations.length = 0;

  res.status(200).json({
    success: true,
    donations: data
  });
}
