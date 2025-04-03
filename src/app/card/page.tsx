import BusinessCard from "../components/card";

export default function Home() {
  return (
    <div className="">
      <BusinessCard
        name="John Doe"
        department="Software Engineering"
        address_1="HSBC Software Development"
        address_2="1 Centenary Square, Birmingham, B1 1HQ, United Kingdom"
        email="john.doe@hsbc.com"
        telephone="+44 20 7991 8888"
        phone="+44 7777 888888"
        photo="/woman.jpg"
      />
    </div>
  );
}
