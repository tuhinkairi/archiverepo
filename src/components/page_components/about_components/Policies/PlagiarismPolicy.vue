 <template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="info"
            >Plagiarism Policy<b-icon-arrow-down></b-icon-arrow-down>
          </b-button>
        </b-card-header>
        <b-collapse
          id="accordion-5"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>
              <div>
                <p>
                  Plagiarism is the unethical act of copying someone else’s
                  initial ideas, processes, results, or words without explicitly
                  acknowledging the original author and source. Self-plagiarism
                  occurs when an author utilizes a large part of their own
                  previously published work without using appropriate
                  references. This can range from getting the same manuscript
                  published in multiple journals to modifying a previously
                  published manuscript with some new data.
                </p>
              </div>
              <div>
                <p>
                  International Journal of Innovative Research in Engineering
                  (IJIRE) is (Online), Bi-monthly international journal for
                  publishing new ideas founded by academicians, educationists,
                  engineers, and corporate people. The research results and
                  fundamental advancement are all aspects of Innovative Research
                  in Engineering & Technology, various engineering disciplines,
                  etc. IJIRE is scholarly open, access, Double Blind Peer Review
                  Journal which helps academic persons and the student
                  community. IJIRE provides the academic community and industry
                  for submitting original research and applications related to
                  Various Engineering disciplines and Advanced Technologies.
                </p>
              </div>
              <div>
                <p>
                  The journal is strictly against any unethical act of copying
                  or plagiarism. Plagiarism is said to have occurred when large
                  portions of a manuscript have been copied from existing
                  previously published resources. All manuscripts submitted for
                  publication to IJIRE are cross-checked for plagiarism using
                  Turnitin/ authenticates /Plagiarism checker X software.
                  Manuscripts found to be plagiarized during the initial stages
                  of review are outrightly rejected and not considered for
                  publication in the journal. Suppose a manuscript is found to
                  be plagiarized after publication. In that case, the
                  Editor-in-Chief will conduct a preliminary investigation,
                  possibly with the help of an appropriate committee constituted
                  for the purpose. If the manuscript is found to be plagiarized
                  beyond the acceptable limits, the journal will contact the
                  author’s Institute / College / University and Funding Agency,
                  if any. Determining misconduct will lead IJIRE (International
                  Journal of Innovative Research Engineering) to run a statement
                  bi-directionally linked online to and from the original paper
                  to note the plagiarism and provide a reference to the
                  plagiarized material. The paper containing plagiarism will
                  also be marked on each page of the PDF. Upon determination of
                  the extent of plagiarism, the paper may also be formally
                  retracted.
                </p>
              </div>
              <div>
                <h5>Types of Plagiarism :</h5>
                <p>
                  <b
                    >The following types of plagiarism are considered by IJIRE:
                  </b>
                </p>
                <p>
                  <b>Total Plagiarism: </b>Previously published content without
                  changes to the text, idea, and grammar is considered total
                  plagiarism. It involves presenting exact text from a source as
                  one’s own.
                </p>
                <p>
                  <b>Partial Plagiarism:</b>If the content is a mixture of
                  multiple sources, where the author has extensively rephrased
                  text, then it is known as partial plagiarism.
                </p>
                <p>
                  <b>Self-Plagiarism:</b>When an author reuses complete or
                  portions of their pre-published research, it is known as
                  self-plagiarism. Complete self-plagiarism is when an author
                  republishes their previously published work in a new journal.
                </p>
              </div>
              <div>
                <h5>Policy and Action for Plagiarism:</h5>
                <p>
                  IJIRE respects intellectual property and aims to protect and
                  promote its authors' original work. Manuscripts containing
                  plagiarized material are against quality, research, and
                  innovation standards. Hence, all authors submitting articles
                  to IJIRE (International Journal of Innovative Research
                  Engineering) must abide by ethical standards and abstain from
                  plagiarism if an author is suspected of plagiarism in a
                  submitted or published manuscript. IJIRE shall contact the
                  author (s) to submit their (their) explanation within two
                  weeks, which may be forwarded to the Fact-Finding Committee
                  (FFC) constituted for further course of action. Suppose IJIRE
                  has yet to receive a response from the author within the
                  stipulated period. In that case, the Director / Dean / Head of
                  the concerned College, Institution, or Organization or the
                  Vice Chancellor of the University to which the author is
                  affiliated shall be contacted to take strict action against
                  the concerned author.
                </p>
                <p>
                  IJIRE shall take serious action against published manuscripts
                  that contain plagiarism and remove them from the IJIRE
                  (International Journal of Innovative Research Engineering)
                  website and other third-party websites where the paper is
                  listed and indexed. When any article published in the IJIRE
                  database is reported plagiarized, IJIRE will constitute a
                  Fact-Finding Committee (FFC) to investigate. Upon having
                  established that the manuscript is plagiarized from some
                  previously published work, IJIRE shall support the original
                  author and manuscript irrespective of the international
                  journal research publisher and may take any or all of the
                  following immediate actions or follow the additional course of
                  actions as recommended by the committee:
                </p>
                <p>
                  IJIRE editorial office shall immediately contact the Director
                  / Dean / Head of the concerned College, Institution, or
                  Organization or the Vice Chancellor of the University to which
                  the author(s) is (are) affiliated to take strict action
                  against the concerned author.
                </p>
                <p>
                  IJIRE shall remove the PDF copy of the published Manuscript
                  from the website and disable all links to the full-text
                  article. The term Plagiarized Manuscript shall be appended to
                  the published manuscript title.
                </p>
                <p>
                  IJIRE shall disable the author's account with the journal and
                  reject all future submissions from the author for 03 / 05 / 10
                  years or even ban the authors permanently.
                </p>
                <p>
                  IJIRE may also display the list of such authors and their full
                  contact details on the IJIRE (International Journal of
                  Innovative Research Engineering) website.
                </p>
                <p>
                  Any other course of action, as recommended by the Committee or
                  deemed fit for the instant case or as decided by the Editorial
                  Board, from time to time.
                </p>
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
b-card-text {
  border: 5px solid black;
}
</style>