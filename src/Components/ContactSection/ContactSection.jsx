import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { m } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { contactData, socialLinks } from '../../data/portfolioData';
import { fadeIn } from '../../Functions/GlobalAnimations';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

const ContactSection = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const { email, linkedInUrl, ctaText } = contactData;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        resetForm();
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch (error) {
        setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
      }
    }
  });

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <Container>
        {/* CTA Header */}
        <m.div className="text-center mb-16" {...fadeIn}>
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-darkgray mb-4">
            {ctaText.split('?')[0]}
            <span className="font-bold">together?</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-16 h-px bg-gray-300" />
            <a
              href={`mailto:${email}`}
              className="font-serif text-lg text-cyan-600 hover:text-darkgray transition-colors"
            >
              {email}
            </a>
            <span className="w-16 h-px bg-gray-300" />
          </div>
        </m.div>

        <Row className="justify-center">
          <Col lg={8}>
            {/* Contact Form */}
            <m.form
              onSubmit={formik.handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Row className="g-4">
                <Col md={6}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 border-b-2 bg-transparent font-serif text-darkgray placeholder-gray-400 focus:outline-none transition-colors ${
                        formik.touched.name && formik.errors.name
                          ? 'border-red-500'
                          : 'border-gray-200 focus:border-cyan-600'
                      }`}
                      {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                    )}
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 border-b-2 bg-transparent font-serif text-darkgray placeholder-gray-400 focus:outline-none transition-colors ${
                        formik.touched.email && formik.errors.email
                          ? 'border-red-500'
                          : 'border-gray-200 focus:border-cyan-600'
                      }`}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                    )}
                  </div>
                </Col>
              </Row>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full px-4 py-3 border-b-2 bg-transparent font-serif text-darkgray placeholder-gray-400 focus:outline-none resize-none transition-colors ${
                    formik.touched.message && formik.errors.message
                      ? 'border-red-500'
                      : 'border-gray-200 focus:border-cyan-600'
                  }`}
                  {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Status */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg text-center ${
                    submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="px-8 py-4 bg-darkgray text-white font-serif font-semibold uppercase tracking-wider hover:bg-cyan-600 hover:text-white transition-colors duration-300 disabled:opacity-50"
                >
                  {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </m.form>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200 text-darkgray hover:border-cyan-600 hover:text-cyan-600 transition-colors"
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
