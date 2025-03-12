const phoneNumberPrettier = (phoneNumber) => {
  const phone = phoneNumber.replace(/\D/g, '');
  const match = phone.match(/^(\d{2})(\d{4})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]} ${match[2]}-${match[3]}-${match[4]}`;
  }
  return phoneNumber;
}

export const appConfig = {
  title: "Arksana",
  isDevelopment: process.env.NODE_ENV === "development",
  description: "Arksana Studio is a creative studio that focuses on web development, mobile app development, and digital marketing.",
  linkContact: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${encodeURIComponent('Halo saya ingin bertanya tentang jasa pembuatan website')}`,
  phone: phoneNumberPrettier(process.env.NEXT_PUBLIC_PHONE_NUMBER),
  address: "Jl Batas Pandang, Jalur 7, No. 10",
  city:"Pontianak Kota, Kalimantan Barat 78114",
  companyLegalName: "CV Khatulistiwa Solusi Teknologi",
  socialMedia: {
    instagram: "https://www.instagram.com/arksanastudio/",
    tiktok: "https://www.tiktok.com/@arksanastudio",
  },
  logo: "/logo/arksana.png",
  googleScript: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT,
  cfSiteKey: process.env.NODE_ENV === "development" ? "1x00000000000000000000AA" : process.env.NEXT_PUBLIC_CF_SITE_KEY,
}
