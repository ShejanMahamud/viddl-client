'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Gavel, Scale, Shield, Users } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our video downloading service.
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Last updated: January 15, 2024
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Acceptance */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Acceptance of Terms
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    By accessing and using VidDL ("the Service"), you accept and agree to be bound
                    by the terms and provision of this agreement. If you do not agree to abide by
                    the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service ("Terms") govern your use of our website located at
                    viddl.johuniq.xyz (the "Service") operated by VidDL ("us", "we", or "our").
                  </p>
                </div>
              </section>

              {/* Service Description */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl mr-4">
                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Service Description
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    VidDL is a free online video downloading service that allows users to download
                    videos from various social media platforms including YouTube, Instagram, TikTok,
                    Facebook, Twitter, Pinterest, and CapCut.
                  </p>
                  <p>Our service provides:</p>
                  <ul className="space-y-2">
                    <li>• Video downloading from supported platforms</li>
                    <li>• Multiple quality options when available</li>
                    <li>• Format conversion capabilities</li>
                    <li>• No registration required</li>
                    <li>• Free access to all features</li>
                  </ul>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl mr-4">
                    <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    User Responsibilities
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>By using our service, you agree to:</p>
                  <ul className="space-y-2">
                    <li>• Only download content you have the right to download</li>
                    <li>• Respect copyright laws and intellectual property rights</li>
                    <li>• Not use the service for illegal or unauthorized purposes</li>
                    <li>• Not attempt to circumvent any security measures</li>
                    <li>• Not overload our servers with excessive requests</li>
                    <li>• Comply with the terms of service of the original platforms</li>
                  </ul>

                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mt-6">
                    <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                      Important Copyright Notice
                    </h4>
                    <p className="text-red-800 dark:text-red-200">
                      You are responsible for ensuring you have the necessary rights to download and
                      use any content. VidDL does not endorse or encourage copyright infringement.
                      Always respect creators' rights and platform terms of service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Prohibited Uses */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl mr-4">
                    <Gavel className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Prohibited Uses
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>You may not use our service:</p>
                  <ul className="space-y-2">
                    <li>• To download copyrighted content without permission</li>
                    <li>• For any unlawful purpose or to solicit others to unlawful acts</li>
                    <li>
                      • To violate any international, federal, provincial, or state regulations or
                      laws
                    </li>
                    <li>
                      • To infringe upon or violate our intellectual property rights or the
                      intellectual property rights of others
                    </li>
                    <li>
                      • To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or
                      discriminate
                    </li>
                    <li>• To submit false or misleading information</li>
                    <li>• To upload or transmit viruses or any other type of malicious code</li>
                    <li>• To collect or track the personal information of others</li>
                    <li>• To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>• For any obscene or immoral purpose</li>
                    <li>• To interfere with or circumvent the security features of the service</li>
                  </ul>
                </div>
              </section>

              {/* Service Availability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Service Availability
                </h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    We strive to provide reliable service, but we cannot guarantee 100% uptime. The
                    service may be temporarily unavailable due to maintenance, updates, or technical
                    issues.
                  </p>
                  <p>We reserve the right to:</p>
                  <ul className="space-y-2">
                    <li>• Modify or discontinue the service at any time</li>
                    <li>• Refuse service to anyone for any reason</li>
                    <li>• Limit the number of downloads per user</li>
                    <li>• Block access from certain IP addresses or regions</li>
                  </ul>
                </div>
              </section>

              {/* Disclaimer */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4">
                    <Scale className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Disclaimer
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    The information on this website is provided on an "as is" basis. To the fullest
                    extent permitted by law, this Company:
                  </p>
                  <ul className="space-y-2">
                    <li>
                      • Excludes all representations and warranties relating to this website and its
                      contents
                    </li>
                    <li>
                      • Excludes all liability for damages arising out of or in connection with your
                      use of this website
                    </li>
                    <li>
                      • Does not guarantee the accuracy, completeness, or availability of downloaded
                      content
                    </li>
                    <li>• Is not responsible for any content downloaded through our service</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Limitation of Liability
                </h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    In no event shall VidDL, nor its directors, employees, partners, agents,
                    suppliers, or affiliates, be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses, resulting from your
                    use of the service.
                  </p>
                </div>
              </section>

              {/* Indemnification */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Indemnification
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    You agree to defend, indemnify, and hold harmless VidDL and its licensee and
                    licensors, and their employees, contractors, agents, officers and directors,
                    from and against any and all claims, damages, obligations, losses, liabilities,
                    costs or debt, and expenses (including but not limited to attorney's fees).
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Termination
                </h2>
                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    We may terminate or suspend your access immediately, without prior notice or
                    liability, for any reason whatsoever, including without limitation if you breach
                    the Terms.
                  </p>
                  <p>Upon termination, your right to use the service will cease immediately.</p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Governing Law
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the jurisdiction in
                    which VidDL operates, without regard to its conflict of law provisions. Our
                    failure to enforce any right or provision of these Terms will not be considered
                    a waiver of those rights.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Changes to Terms
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms
                    at any time. If a revision is material, we will try to provide at least 30 days
                    notice prior to any new terms taking effect.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <ul className="mt-4 space-y-2">
                    <li>
                      • Email:{' '}
                      <a
                        href="mailto:legal@viddl.johuniq.xyz"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        legal@viddl.johuniq.xyz
                      </a>
                    </li>
                    <li>
                      • Website:{' '}
                      <a
                        href="https://viddl.johuniq.xyz/contact"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        viddl.johuniq.xyz/contact
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
