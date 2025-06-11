'use client';

import { motion } from 'framer-motion';
import { Database, Eye, Globe, Lock, Shield, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
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
              Privacy
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect your data and respect your rights.
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
              {/* Information We Collect */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl mr-4">
                    <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Information We Collect
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Information You Provide
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Video URLs you submit for downloading</li>
                      <li>• Device and browser information for optimization</li>
                      <li>• Usage patterns to improve our service</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Automatically Collected Information
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• IP address (anonymized for analytics)</li>
                      <li>• Browser type and version</li>
                      <li>• Operating system information</li>
                      <li>• Referral source and page views</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl mr-4">
                    <UserCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    How We Use Your Information
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>We use the information we collect to:</p>
                  <ul className="space-y-2">
                    <li>• Provide and maintain our video downloading service</li>
                    <li>• Process your download requests efficiently</li>
                    <li>• Improve our service performance and user experience</li>
                    <li>• Analyze usage patterns to optimize our platform</li>
                    <li>• Prevent abuse and ensure service security</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              {/* Data Protection */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl mr-4">
                    <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Data Protection & Security
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="space-y-2">
                    <li>• SSL/TLS encryption for all data transmission</li>
                    <li>• No storage of downloaded videos on our servers</li>
                    <li>• Automatic deletion of temporary processing files</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Limited access to personal information</li>
                  </ul>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mt-6">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Important Note
                    </h4>
                    <p className="text-blue-800 dark:text-blue-200">
                      We do not store any downloaded videos or personal content. All processing is
                      done in real-time, and temporary files are immediately deleted after download
                      completion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl mr-4">
                    <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Information Sharing
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    We do not sell, trade, or rent your personal information. We may share
                    information only in these limited circumstances:
                  </p>
                  <ul className="space-y-2">
                    <li>• With your explicit consent</li>
                    <li>• To comply with legal requirements or court orders</li>
                    <li>• To protect our rights, property, or safety</li>
                    <li>
                      • With trusted service providers who assist in our operations (under strict
                      confidentiality agreements)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl mr-4">
                    <Eye className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Your Privacy Rights
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="space-y-2">
                    <li>
                      • <strong>Access:</strong> Request information about data we have collected
                    </li>
                    <li>
                      • <strong>Correction:</strong> Request correction of inaccurate information
                    </li>
                    <li>
                      • <strong>Deletion:</strong> Request deletion of your personal information
                    </li>
                    <li>
                      • <strong>Portability:</strong> Request a copy of your data in a portable
                      format
                    </li>
                    <li>
                      • <strong>Objection:</strong> Object to certain processing of your information
                    </li>
                  </ul>

                  <p className="mt-4">
                    To exercise these rights, please contact us at{' '}
                    <a
                      href="mailto:privacy@viddl.johuniq.xyz"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      privacy@viddl.johuniq.xyz
                    </a>
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>We use minimal cookies and tracking technologies:</p>
                  <ul className="space-y-2">
                    <li>• Essential cookies for basic functionality</li>
                    <li>• Analytics cookies to understand usage patterns (anonymized)</li>
                    <li>• Preference cookies to remember your settings</li>
                  </ul>
                  <p>You can control cookie settings through your browser preferences.</p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Children's Privacy
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    Our service is not intended for children under 13 years of age. We do not
                    knowingly collect personal information from children under 13. If you are a
                    parent or guardian and believe your child has provided us with personal
                    information, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Changes to This Policy
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any
                    changes by posting the new Privacy Policy on this page and updating the "Last
                    updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <ul className="mt-4 space-y-2">
                    <li>
                      • Email:{' '}
                      <a
                        href="mailto:privacy@viddl.johuniq.xyz"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        privacy@viddl.johuniq.xyz
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
