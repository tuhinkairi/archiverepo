 <template>
  <div>
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-5 variant="info"
            >Plagiarism Policy <b-icon-arrow-down></b-icon-arrow-down>
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
                  prior ideas, processes, results or words without explicit
                  acknowledgement of the original author and source.
                  Self-plagiarism occurs when an author utilizes large part of
                  his/her own previously published work without using
                  appropriate references. This can range from getting the same
                  manuscript published in multiple journals to modifying a
                  previously published manuscript with some new data.
                </p>
              </div>
              <div>
                <p>
                  International Journal of Innovative Research in Engineering
                  (IJIRE) is (Online), Bi-monthly international journal for
                  publication of new ideas founded by academicians,
                  educationist, engineers and corporate people. The research
                  results and fundamental advancement are all aspects of
                  Innovative Research in Engineering & Technology and various
                  engineering disciplines, etc. IJIRE is a scholarly open
                  access, Double Blind Peer Review Journal which helps to
                  academic person as well as student community. IJIRE provides
                  the academic community and industry for the submission of
                  original research and applications related to Various
                  Engineering discipline and Advanced Technologies.
                </p>
              </div>
              <div>
                <p>
                  The journal is strictly against any unethical act of copying
                  or plagiarism in any form. Plagiarism is said to have occurred
                  when large portions of a manuscript have been copied from
                  existing previously published resources. All manuscripts
                  submitted for publication to IJIRE are cross-checked for
                  plagiarism using Turnitin/ iThenticate /Plagiarism checker X
                  software. Manuscripts found to be plagiarized during initial
                  stages of review are out-rightly rejected and not considered
                  for publication in the journal. In case a manuscript is found
                  to be plagiarized after publication, the Editor-in-Chief will
                  conduct preliminary investigation, may be with the help of a
                  suitable committee constituted for the purpose. If the
                  manuscript is found to be plagiarized beyond the acceptable
                  limits, the journal will contact the author’s Institute /
                  College / University and Funding Agency, if any. A
                  determination of misconduct will lead IJIRE to run a statement
                  bi directionally linked online to and from the original paper,
                  to note the plagiarism and provide a reference to the
                  plagiarized material. The paper containing the plagiarism will
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
                  <b>Full Plagiarism:</b> Previously published content without
                  any changes to the text, idea and grammar is considered as
                  full plagiarism. It involves presenting exact text from a
                  source as one’s own.
                </p>
                <p>
                  <b>Partial Plagiarism:</b> If content is a mixture from
                  multiple different sources, where the author has extensively
                  rephrased text, then it is known as partial plagiarism.
                </p>
                <p>
                  <b>Self-Plagiarism:</b> When an author reuses complete or
                  portions of their pre-published research, then it is known as
                  self-plagiarism. Complete self-plagiarism is a case when an
                  author republishes their own previously published work in a
                  new journal.
                </p>
              </div>
              <div>
                <h5>Policy and Action for Plagiarism :</h5>
                <p>
                  IJIRE respects intellectual property and aims at protecting
                  and promoting original work of its authors. Manuscripts
                  containing plagiarized material are against the standards of
                  quality, research and innovation. Hence, all authors
                  submitting articles to IJIRE are expected to abide ethical
                  standards and abstain from plagiarism, in any form. In case,
                  an author is found to be suspected of plagiarism in a
                  submitted or published manuscript then, IJIRE shall contact
                  the author (s) to submit his / her (their) explanation within
                  two weeks, which may be forwarded to the Fact Finding
                  Committee (FFC) constituted for the purpose, for further
                  course of action. If IJIRE does not receive any response from
                  the author within the stipulated time period, then the
                  Director / Dean / Head of the concerned College, Institution
                  or Organization or the Vice Chancellor of the University to
                  which the author is affiliated shall be contacted to take
                  strict action against the concerned author.
                </p>
                <p>
                  IJIRE shall take serious action against published manuscripts
                  found to contain plagiarism and shall completely remove them
                  from IJIRE website and other third party websites where the
                  paper is listed and indexed. The moment, any article published
                  in IJIRE database is reported to be plagiarized, IJIRE will
                  constitute a Fact Finding Committee (FFC) to investigate the
                  same. Upon having established that the manuscript is
                  plagiarized from some previously published work, IJIRE shall
                  support the original author and manuscript irrespective of the
                  publisher and may take any or all of the following immediate
                  actions or follow the additional course of actions as
                  recommended by the committee:
                </p>
                <p>
                  IJIRE editorial office shall immediately contact the Director
                  / Dean / Head of the concerned College, Institution or
                  Organization or the Vice Chancellor of the University to which
                  the author(s) is (are) affiliated to take strict action
                  against the concerned author.
                </p>
                <p>
                  IJIRE shall remove the PDF copy of the published manuscript
                  from the website and disable all links to full text article.
                  The term Plagiarized Manuscript shall be appended to the
                  published manuscript title.
                </p>
                <p>
                  IJIRE shall disable the author account with the journal and
                  reject all future submissions from the author for a period of
                  03 / 05 / 10 years or even ban the authors permanently.
                </p>
                <p>
                  IJIRE may also display the list of such authors along with
                  their full contact details on the IJIRE website.
                </p>
                <p>
                  Any other course of action, as recommended by the Committee or
                  as deemed fit for the instant case or as decided by the
                  Editorial Board, from time to time.
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