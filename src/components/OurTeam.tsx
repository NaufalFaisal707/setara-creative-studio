// components
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function OurTeam() {
  return (
    <div id="our-team" className="overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 space-y-9 pt-24">
          <h1 className="font-sans text-xl font-bold">Our Team</h1>

          <div className="grid grid-cols-4 gap-4 rounded-lg bg-[#f99f32] p-4">
            <Card>
              <CardHeader>gambar coy</CardHeader>
              <CardContent>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum veritatis natus dolore consequatur voluptates,
                  dignissimos mollitia alias pariatur nesciunt omnis deleniti
                  ratione, sequi tempora et vitae sint eum? Quisquam, rerum.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>gambar coy</CardHeader>
              <CardContent>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum veritatis natus dolore consequatur voluptates,
                  dignissimos mollitia alias pariatur nesciunt omnis deleniti
                  ratione, sequi tempora et vitae sint eum? Quisquam, rerum.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>gambar coy</CardHeader>
              <CardContent>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum veritatis natus dolore consequatur voluptates,
                  dignissimos mollitia alias pariatur nesciunt omnis deleniti
                  ratione, sequi tempora et vitae sint eum? Quisquam, rerum.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>gambar coy</CardHeader>
              <CardContent>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum veritatis natus dolore consequatur voluptates,
                  dignissimos mollitia alias pariatur nesciunt omnis deleniti
                  ratione, sequi tempora et vitae sint eum? Quisquam, rerum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
