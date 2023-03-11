import Link from "next/link";
import LocationsGrid from "@/components/locations/locations-grid";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Content from "@/components/shared/content";

export default function LocationsPage() {
  return (
    <div className="w-full">
      <Header title="Locations"></Header>
      <Content>
        <LocationsGrid></LocationsGrid>
      </Content>
      <Footer href="/locations" title="Locations"></Footer>
    </div>
  );
}
