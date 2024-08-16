import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";

function VideoCard() {
  return (
    <Card>
      <CardContent>Video</CardContent>
    </Card>
  );
}

function OurMission() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Mission</CardTitle>
      </CardHeader>
      <CardContent>
        to help you to find the best talent in the world
      </CardContent>
    </Card>
  );
}

function LatestHackathon() {
  return (
    <Card className="xs:col-span-2">
      <CardHeader>
        <CardTitle>Latest Hackathon</CardTitle>
      </CardHeader>
      <CardContent>
        to help you to find the best talent in the world
      </CardContent>
    </Card>
  );
}

const KeyDataList = [
  {
    label: "Hackathon Alliance",
    value: "40+",
  },
  {
    label: "Track",
    value: "12+",
  },
  { label: "Hackathon Projects", value: "70+" },
  { label: "Illuminated Nations", value: "4+" },
];
function KeyData() {
  return (
    <>
      {KeyDataList.map((item) => (
        <Card key={item.label}>
          <CardHeader>
            <CardTitle>{item.value}</CardTitle>
          </CardHeader>
          <CardContent>{item.label}</CardContent>
        </Card>
      ))}
    </>
  );
}

export function Focus() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 gap-4">
      <VideoCard />
      <OurMission />
      <KeyData />
      <LatestHackathon />
    </div>
  );
}
