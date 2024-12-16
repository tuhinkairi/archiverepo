<template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >Publication Ethics and Publication Malpractice Statement Policy
            <b-icon-arrow-down></b-icon-arrow-down
          ></b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <p>
                (The following statements are based on Elsevier recommendations
                and COPE's Best Practice Guidelines for Journal Editors)
              </p>
              <p>
                To maintain fair practice we at IJIRE strongly believe in
                following these guidelines. We are committed to fair practice of
                publication. Success in this regard can be achieved if ethics
                are well practiced by following participants:
              </p>
              <div>
                <h5>Ethical guidelines for journal publication :</h5>
                <p>
                  International Journal of Innovative Research in Engineering is
                  committed to ensuring ethics in publication and quality of
                  articles. Especially, International Journal of Innovative
                  Research in Engineering is following the Code of Conduct as
                  defined by the Committee of Publication Ethics (COPE).
                  <i>https://publicationethics.org/files/u2/New_Code.pdf</i>
                </p>
                <p>
                  These ethics include the editor following certain rules on
                  relations with readers, authors, and reviewers as well as
                  procedures for handling complaints. Conformance to standards
                  of ethical behaviour is therefore expected of all parties
                  involved: Authors, Editors, Reviewers, and the Publisher. In
                  particular,
                </p>
              </div>
              <div>
                <h5>Authors :</h5>
                <p>
                  Authors should present an objective discussion of the
                  significance of research work as well as sufficient details
                  and references.
                </p>
                <p>
                  Authors should maintain accurate records of data associated
                  with their submitted manuscript and supply or provide access
                  to these data, on reasonable request. Authors guarantee that
                  all data used in the article are real and authentic. Where
                  appropriate and where allowed by employer, funding body and
                  others who might have an interest, authors should deposit data
                  in a suitable repository or storage location, for sharing and
                  further use by others.
                </p>
                <p>
                  Fraudulent or knowingly inaccurate statements constitute
                  unethical behaviour and are unacceptable.
                </p>
                <p>
                  The authors should ensure that their work is entirely
                  original, and if the work and/or words of others have been
                  used, this fact has been appropriately acknowledged.
                  Plagiarism in all its forms constitutes unethical publishing
                  behaviour and is unacceptable. Submitting the same manuscript
                  to more than one journal concurrently constitutes unethical
                  publishing behaviour and is unacceptable. Authors should not
                  submit articles describing essentially the same re-search to
                  more than one journal.
                </p>
                <p>
                  Authors should acknowledge the financial support and
                  help/guidance of others if appropriate.
                </p>
                <p>Authors should provide the disclaimer if appropriate.</p>
                <p>
                  All co-authors should significantly contribute to the
                  research. The corresponding author should ensure that there is
                  a full consensus of all co-authors in approving the final
                  version of the paper and its submission for publication.
                </p>
                <p>
                  Authors are obliged to participate in peer review process.
                </p>
                <p>
                  Authors should notify promptly the editor if a significant
                  error in their publication is identified, and cooperate with
                  the editor to publish an erratum, addendum, corrigendum
                  notice, or to re-tract the paper, where it is deemed
                  necessary.
                </p>
              </div>
              <hr />
              <div>
                <h5>Editors :</h5>
                <p>
                  Editors have complete responsibility and authority to
                  accept/reject a manuscript.
                </p>
                <p>
                  Editors should evaluate manuscripts exclusively on the basis
                  of their academic merit. Editors act in a balanced, objective
                  and fair way while carrying out their expected duties, without
                  discrimination on grounds of gender, sexual orientation,
                  religious or political beliefs, ethnic or geographical origin
                  of the authors.
                </p>
                <p>Editors accept the paper when reasonably certain.</p>
                <p>
                  Editors must not use unpublished information in the editor's
                  own research without the express written consent of the
                  author.
                </p>
                <p>Editors preserve anonymity of reviewers.</p>
                <p>
                  When errors are found, editors promote publication of
                  correction or retraction.
                </p>
                <p>
                  Editors should take reasonable responsive measures when
                  ethical complaints have been presented concerning a submitted
                  manuscript or published article.
                </p>
              </div>
              <hr />
              <div>
                <h5>Reviewers :</h5>
                <p>
                  Any manuscripts received for review must be treated as
                  confidential documents. Privileged information or ideas
                  obtained through peer review must be kept confidential and not
                  used for personal advantage.
                </p>
                <p>
                  Reports should be conducted objectively, and observations
                  should be formulated clearly with supporting arguments, so
                  that authors can use them for improving the paper. Any
                  relevant published work which is not yet cited should be
                  pointed out.
                </p>
                <p>
                  Any selected referee who feels unqualified to review the
                  research reported in a manuscript or knows that its prompt
                  review will be impossible should notify the editor and excuse
                  himself from the review process.
                </p>
                <p>
                  Reviewers should not consider manuscripts in which they have
                  conflicts of interest resulting from competitive,
                  collaborative, or other relationships or connections with any
                  of the authors, companies, or institutions connected to the
                  papers.
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <p>Publisher monitors and safeguards publishing ethics.</p>
                  </li>
                  <li><p>Publisher communicates journal policies.</p></li>
                  <li>
                    <p>Publisher respects privacy of all parties involved.</p>
                  </li>
                  <li><p>Publisher fosters editorial independence.</p></li>
                  <li>
                    <p>
                      Publisher maintains the integrity of the academic record.
                    </p>
                  </li>
                  <li>
                    <p>
                      Publisher protects intellectual property and copyrights.
                    </p>
                  </li>
                  <li>
                    <p>
                      Publisher publishes corrections, clarifications, and
                      retractions.
                    </p>
                  </li>
                  <li>
                    <p>
                      Publisher constantly improves the quality of the journal.
                    </p>
                  </li>
                </ul>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-info {
  background-color: #72a9db;
}
.card {
  border: none;
}
</style>