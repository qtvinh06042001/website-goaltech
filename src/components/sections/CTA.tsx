import React from 'react'
import Image from "next/image";

export default function CTA() {
    return (
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#3696FF] to-[#0039D5] mix-blend-multiply text-white min-h-[320px] lg:min-h-[400px]
flex items-center">
                <Image
                    src="/images/dot_wave.png"
                    alt="background"
                    fill
                    priority
                    className="absolute object-cover object-center transform translate-y-12 -z-20"
                    style={{ objectFit: "cover" }}
                />

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Sẵn sàng chuyển đổi doanh nghiệp của bạn?</h2>
                    <p className="mt-2 text-sm sm:text-base text-blue-100">Đội ngũ chuyên gia của GoalTech sẵn sàng tư vấn miễn phí và đồng hành cùng bạn</p>

                    <div className="mt-6 flex justify-center gap-3">
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 rounded-md bg-white text-blue-600 font-medium shadow-sm hover:bg-gray-100"
                        >
                            Liên hệ ngay
                        </a>

                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 rounded-md border border-white/40 text-white hover:bg-white/10"
                        >
                            Xem dịch vụ
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
