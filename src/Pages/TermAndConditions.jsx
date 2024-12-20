import React from "react";
import TCPPRP from "../components/TermsAndConditionsPrivacyPolicyRefundPolicy/TC";

const termsData = {
  title: `TERMS & CONDITIONS`,
  description: `Please note that all scholarship concessions will be confirmed only
        after submission of the admission form along with the first installment
        of the fee. Any student caught employing unfair practice during the
        National Admission Test (NAT), is subject to immediate expulsion from
        the examination hall, and no refund of the NAT/VIQ fee already paid
        shall be made at any cost. A student after qualifying NAT/VIQ and taking
        admission at any center of CUET PLUS will be bound by the rules &
        regulations of that center and in all matters whatsoever the
        responsibility will be of that center only.`,
  note: `Any type of scholarship/concession/discount given to
        the students may attract Service Tax/ GST to be paid by the
        students/parents if levied by the Govt. or as per law at any point of
        time will be charged/recovered from the student/parents.`,
  subTitle: `The agreement between you and the CUET PLUS shall be subject to the following terms and conditions:-`,
  conditions: [
    `The User certifies that he/she is at least 18 (eighteen) years of age or has the consent of a parent or legal guardian.`,
    `These terms and conditions supersede all previous representations, understandings, or agreements and shall prevail notwithstanding any variance with any other terms of any order submitted. By using the CUET PLUS Online Services you agree to be bound by the Terms and Conditions.`,
    `All prices, unless indicated specially are in Indian Rupees.`,
    `All prices and availability of products are subject to change without prior notice at the sole discretion of CUET Plus Classes (CUET PLUS).`,
    `CUET PLUS reserves the right to refuse or cancel any order placed for a product, which is listed at an incorrect price. This shall be regardless of whether the order has been confirmed or the payment has been levied via credit card. In the event, that the payment has been processed by CUET PLUS Service the same shall be credited to your credit card account and duly notified to you through email, call, WhatsApp, and/or SMS.`,
    `You must use your own credit card. CUET PLUS will not be liable for any credit card fraud.`,
    `CUET PLUS shall not be liable for any delay/non-delivery of purchased goods (Study materials, Online Tests, any assignments) by the vendors, trade organization/s, manufacturers/shop, etc., or in case of an act of God such as flood, fire, wars, or any cause that is beyond the control of CUET PLUS.`,
    `The User agrees clearly that the use of CUET Plus all (Online & Offline) Services is at the User's sole risk. CUET PLUS affiliates, employees, agents, consultants, and contracted companies make no warranties of any kind, whether expressed or implied for the service it is providing or as to the results that may be obtained from the use of the Service, or as the accuracy, reliability or content of any information, service, or merchandise provided through this Service. It is also clearly understood that all warranties, implied or expressed take place between the vendors and the User.`,
    `Any student enrolled with CUET PLUS will have to regularly work hard. In case the teacher feels that the student is not working hard, creating indiscipline or using unfair means in the institute or in classes, irregular in attendance, or not responding properly, he/she may be expelled from the institute. The decision of the Centre In charge in this regard will be final and binding on the student/parent. No fee or part of the fee will be refunded in such cases.`,
    `After depositing money towards ‘Registration & Admission’, if a student becomes disinterested in the Institute due to any reason whatsoever and wants to take his/her money back, the Institute will not refund the money deposited towards the Registration fee/Admission fee. However, if a student applies for a refund before the commencement of the course/classes, only the admission fee and the first installment of the tuition fee will be refunded along with the PDCs submitted, if any. The registration/admission fee deposited towards a particular course will not be adjusted against any other course.`,
    `It is the responsibility of the parents to submit the fee of their ward in time as per the schedule given in the admission letter. They should not expect reminders and calls from the center.`,
    `If the cheque is bounced for any reason whatsoever, a fine of 1000 will be charged separately from the student along with the fee installment.`,
    `It is compulsory/mandatory to provide an active e-mail I.D. Mobile No and whatsapp No. of the student/ father/guardian. The result of tests, important notifications, updates, and/or any other information of the Institute will be sent to the student through email, call, WhatsApp, and/or SMS. The Institute shall not be responsible for any information regarding the result or anything else not received by the student if he/she has not given his/her e-mail I.D./mobile no. in the Admission form at the time of admission.`,
    `If any type of mishap occurs on the premises of CUET PLUS because of situations beyond control or any natural calamity such as earthquake, flood, fire, electric short circuit, etc, the institute shall not be responsible in any manner whatsoever.`,
    `The Examination Centre of any place can be changed as per the requirement/ need of the company without any prior notice to the students/parents.`,
    `CUET PLUS reserves the right to use the photograph for publicity in case the student secures position/success in any Engineering/Medical Entrance Exams as well as in Olympiads, NTSE & KVPY, or any other national level entrance tests.`,
    `In case any parent/guardian/student is found misbehaving with any staff member of the Institute, his/her ward can be rusticated and no claim to retain such student will be entertained. The decision of the Director will be final and binding on the student and parents/guardian.`,
    `If at any point in time, the Govt. further increases GST or levy any other tax, the extra amount of GST or other tax will be borne by the students from the date of enforcement of the act by the Govt.`,
    `CUET PLUS reserves the right to make any alteration in its programs/venue/timing and days of classes without any prior notice to anybody. The decision of the Director will be final & binding on the students and the parents.`,
    `CUET PLUS reserves the right to amend any of the terms mentioned above without giving any notice.`,
  ],
  disclaimer: `I hereby give my consent that even if my mobile number is registered with NDNC, I would like CUET PLUS Or any of its partner institutions, employees, officers, authorized agencies, service partners, and representatives to call, message or email me for any matter related to the course, admission, or any other service.`,
};

const TermAndConditions = () => {
  return (
    <div>
      <TCPPRP termsData={termsData} />
    </div>
  );
};

export default TermAndConditions;
