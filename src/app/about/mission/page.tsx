import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Mission() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto max-w-6xl px-5">
            <h1 className="text-5xl font-extrabold text-[var(--primary-color)] mb-8 text-center">
              Our Mission & Vision
            </h1>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6">Mission</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  The mission of the Pakistani Academic Community Korea (PAACK) is to build 
                  a vibrant and supportive network for Pakistani doctors, researchers, and 
                  students in South Korea. We are dedicated to empowering our community by 
                  addressing critical social and academic challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  Through collaboration, resource sharing, and advocacy, we aim to enhance 
                  the professional success and social well-being of our members, enabling 
                  them to thrive in Korea.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6">Vision</h2>
                <p className="text-lg leading-relaxed">
                  To become the leading platform that connects, empowers, and represents 
                  the Pakistani academic and professional community in South Korea, fostering 
                  excellence, innovation, and cross-cultural understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
