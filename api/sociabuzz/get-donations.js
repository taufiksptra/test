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
