import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "30+ South Texas Bird Species | Rio Grande Valley Birding Guide" },
  description:
    "Explore 30+ Rio Grande Valley specialty birds: Green Jay, Altamira Oriole, Aplomado Falcon, Whooping Crane, and more. Filter by residency status, season, and habitat.",
  openGraph: {
    title: "30+ South Texas Bird Species | Rio Grande Valley Birding Guide",
    description:
      "Explore 30+ Rio Grande Valley specialty birds: Green Jay, Altamira Oriole, Aplomado Falcon, Whooping Crane, and more.",
    type: "website",
    images: [
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
        width: 2585,
        height: 1723,
        alt: "Altamira Oriole in South Texas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "30+ South Texas Bird Species | Rio Grande Valley Birding Guide",
    description:
      "Explore 30+ Rio Grande Valley specialty birds: Green Jay, Altamira Oriole, Aplomado Falcon, Whooping Crane, and more.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Altamira_oriole_%28Icterus_gularis_gigas%29_Copan.jpg",
    ],
  },
};

export default function BirdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
