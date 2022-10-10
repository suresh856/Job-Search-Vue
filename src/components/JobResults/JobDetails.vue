<template>
  <div class="max-w-5xl mx-auto">
    <div
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <font-awesome-icon :icon="['fas', 'building']" class="mr-3" />
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="mr-3"
              />
              <li
                v-for="location in job.locations"
                :key="location"
                class="inline-block mr-5"
              >
                {{ location }}
              </li>
            </ul>
          </div>
          <div class="flex items-center h-full ml-auto">
            <action-button
              data-test="apply-button"
              text="Apply"
              type="primary"
            />
          </div>
        </div>
      </div>
      <hr class="pt-8" />
      <div class="bg-slate-300 border-solid border-l-4 flex py-4">
        <div>
          <p class="pl-8">
            <span
              >Note: By applying to this position you will have an opportunity
              to share your preferred working location from the following:
            </span>
            <b>
              <span
                v-for="hlocation in job.locations"
                :key="hlocation"
                class="inline-block mr-5"
                >{{ hlocation }}</span
              ></b
            >
          </p>
        </div>
      </div>

      <div class="px-8 py-4">
        <hr />
        <div>
          <h3 class="mt-1 mb-2 font-bold">Minimum Qualifications:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="mqualification in job.minimumQualifications"
                :key="mqualification"
              >
                {{ mqualification }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2 font-bold">Preffered Qualifications:</h3>
          <div>
            <ul class="pl-8 list-disc">
              <li
                v-for="qualification in job.preferredQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <hr />
        <div>
          <h3 class="mt-1 mb-2 font-bold text-2xl">About the job</h3>
          <ul class="pl-8 list-disc">
            <li v-for="desciption in job.description" :key="desciption">
              {{ desciption }}
            </li>
          </ul>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2 font-bold text-2xl">Responsibility</h3>
          <ul class="pl-8 list-disc">
            <li v-for="desciption in job.description" :key="desciption">
              {{ desciption }}
            </li>
            <li v-for="desciption in job.description" :key="desciption">
              {{ desciption }}
            </li>
          </ul>
        </div>
      </div>

      <div class="px-8 py-4">
        <hr class="pb-6" />
        <div class="bg-brand-gray-2 mx-auto text-sm">
          <p>
            Information collected and processed as part of your Google Careers
            profile, and any job applications you choose to submit is subject to
            Google's
            <a
              class="text-blue-800"
              href="https://careers.google.com/privacy-policy/"
              >Applicant and Candidate Privacy Policy</a
            >.
          </p>
          <br />
          <p>
            Google is proud to be an equal opportunity workplace and is an
            affirmative action employer. We are committed to equal employment
            opportunity regardless of race, color, ancestry, religion, sex,
            national origin, sexual orientation, age, citizenship, marital
            status, disability, gender identity or Veteran status. We also
            consider qualified applicants regardless of criminal histories,
            consistent with legal requirements. See also
            <a class="text-blue-800" href="/eeo/">Google's EEO Policy</a>
            and
            <a class="text-blue-800" href="/jobs/dist/legal/OFCCP_EEO_Post.pdf"
              >EEO is the Law.</a
            >
            If you have a need that requires accommodation, please let us know
            by completing our
            <a href="https://goo.gl/forms/aBt6Pu71i1kzpLHe2"
              >Accommodations for Applicants form</a
            >.
          </p>
          <br />
          <p>
            To all recruitment agencies: Google does not accept agency resumes.
            Please do not forward resumes to our jobs alias, Google employees or
            any other organization location. Google is not responsible for any
            fees related to unsolicited resumes.
          </p>
          <br />
          <p>
            To learn more about COVID vaccination requirements for US Google
            workplaces, read our
            <a
              class="text-blue-800"
              href="https://support.google.com/googlecareers/answer/12182087"
              >Vaccination Entry Policy</a
            >.
          </p>
          <br />
          <p>
            At Google, we’re committed to building a workforce that is more
            representative of the users we serve and creating a culture where
            everyone feels like they belong. To learn more about our diversity,
            equity, inclusion commitments and how we’re building belonging,
            please visit our
            <a class="text-blue-800" href="https://about.google/belonging/"
              >Belonging page</a
            >
            for more information.
          </p>
          <br />
          <p>
            We welcome and encourage people who are expecting and/or
            parents-to-be to apply to this or any other role at Google.
          </p>
          <br />
          <p>
            Google is a global company and, in order to facilitate efficient
            collaboration and communication globally, English proficiency is a
            requirement for all roles.
          </p>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import getJobById from "@/api/getJobById";

const route = useRoute();
const id = route.params.id as string;
const job = await getJobById(parseInt(id));
</script>
<script lang="ts">
import ActionButton from "../shared/ActionButton.vue";
export default {
  name: "JobDetails",
  components: { ActionButton },
};
</script>
