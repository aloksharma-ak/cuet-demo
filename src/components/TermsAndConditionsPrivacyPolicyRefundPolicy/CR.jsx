import React from "react";
import styles from "./CR.module.css";

const CR = () => {
  return (
    <div className={styles.CancellationAndRefund}>
      <h1 className={styles.title}>Cancellation and Refund</h1>
      <ol className={styles.list}>
        <li className={styles.listItem}>
          <h3 className={styles.subTitle}>Accurate Information Requirement: </h3>
          <p className={styles.description}>
            Students and parents must provide accurate information. If any
            discrepancies are found at any point during the student's time with
            CUET PLUS, it may lead to legal action, which could include the
            expulsion of the student from the institute. In such instances,
            there will be no refunds of fees, claims, compensation, or damages
            provided.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.subTitle}>Document Submission and Formalities: </h3>
          <p className={styles.description}>
            Students and parents must furnish all required documents and
            complete formalities at least two days before the start of the
            course. Failure to do so may prevent the student from attending
            classes unless explicitly permitted by CUET PLUS in writing. No
            refunds or reimbursements for fees or study material will be granted
            due to incomplete documentation.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.subTitle}>Undertaking for Midway Exit: </h3>
          <p className={styles.description}>
            Should a student leave the institute before completing the full
            course for any reason—such as the transfer of a parent/legal
            guardian, illness, admission to another institute/college, or
            cancellation of the studentship due to misconduct—neither the
            student nor their parent/guardian will be entitled to any refund of
            fees.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.subTitle}>Change of Study Centre or Program: </h3>
          <p className={styles.description}>
            Once a student has joined a specific study center or program, they
            will not be entitled to transfer to another center or program, nor
            will they be eligible for a refund of fees. However, CUET PLUS may
            consider requests for program changes if the student is deemed
            eligible for a higher course, subject to the payment of any fee
            difference.
          </p>
        </li>
        <li className={styles.listItem}>
          <h3 className={styles.subTitle}>Non-Refundable Fees: </h3>
          <p className={styles.description}>
            Fees paid are strictly non-refundable under any circumstances. They
            are also not transferable or adjustable against any other current or
            future courses at CUET PLUS, nor transferable to another student.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default CR;
