'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Gavel, Scale, Shield, Users } from 'lucide-react';

export default function DMCA() {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              DMCA
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn about our copyright policy and how to file infringement claims.
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
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
              {/* Notice */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-xl mr-4">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    DMCA Notice
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    VidDL is committed to respecting intellectual property rights and complying with
                    the Digital Millennium Copyright Act (DMCA). This policy outlines our procedures
                    for handling copyright infringement claims.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                    <p className="text-yellow-800 dark:text-yellow-200">
                      VidDL respects intellectual property rights and expects users to do the same.
                    </p>
                  </div>
                </div>
              </section>

              {/* Filing Claims */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Filing a Copyright Infringement Claim
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    If you believe that your copyrighted work has been infringed upon, please send a
                    written notice to our designated Copyright Agent with the following information:
                  </p>
                  <ul className="space-y-2">
                    <li>• Your contact information (name, address, phone number, and email)</li>
                    <li>• Description of the copyrighted work that you claim has been infringed</li>
                    <li>• Description of where the material is located on our service</li>
                    <li>
                      • A statement that you have a good faith belief that the use is not authorized
                    </li>
                    <li>
                      • A statement that the information in your notice is accurate and that you are
                      the copyright owner or authorized to act on their behalf
                    </li>
                    <li>• Your physical or electronic signature</li>
                  </ul>
                </div>
              </section>

              {/* Counter-Notification */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl mr-4">
                    <Scale className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Counter-Notification
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    If you believe that your content was removed in error, you may file a
                    counter-notification. Your counter-notification must include:
                  </p>
                  <ul className="space-y-2">
                    <li>• Your contact information</li>
                    <li>• Identification of the material that was removed</li>
                    <li>
                      • A statement under penalty of perjury that you have a good faith belief the
                      material was removed in error
                    </li>
                    <li>
                      • A statement that you consent to the jurisdiction of the federal court in
                      your district
                    </li>
                    <li>• Your physical or electronic signature</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4">
                    <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Contact Information
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-4">
                  <p>Please send all DMCA notices to our designated Copyright Agent:</p>
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
                    <p>
                      <strong>Copyright Agent</strong>
                      <br />
                      VidDL
                      <br />
                      Email: dmca@viddl.johuniq.xyz
                      <br />
                      Address: [Your Business Address]
                    </p>
                  </div>
                </div>
              </section>

              {/* Repeat Infringers */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl mr-4">
                    <Gavel className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Repeat Infringers
                  </h2>
                </div>

                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    VidDL maintains a policy of terminating accounts of users who are repeat
                    infringers of copyright or other intellectual property rights.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
