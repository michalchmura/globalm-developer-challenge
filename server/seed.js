'use strict';

import db from './models';
import { config, db_connect } from './config';
import U from 'underscore';
import S from 'underscore.string';
import M from 'moment';
import faker from 'faker';

const SKILLS_SET = ['javascript', 'html', 'java', 'c++', 'python', 'c#', 'CSS', 'LESS', 'ruby', 'ruby on rails', 'djago', 'ember', 'flask', 'elixir', 'scrum', 'ajax', 'sublime'];
const COUNTRY_CODE_SET = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'SH', 'KN', 'LC', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'CS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW'];

async function create_candidates() {
  let candidates_count = await db.Candidate.count();
  let candidate;

  console.log(`Generating candidates...`);
  for(let i = 0; i < 100 - candidates_count; i++) {
    let locations_interested_in = [];
    let locations_count = U.random(1, 5);

    for(let j = 0; j < locations_count; j++) {
      locations_interested_in.push(faker.address.city());
    }

    let github_repos = [];
    let repos_count = U.random(1, 10);

    for(let j = 0; j < repos_count; j++) {
      github_repos.push({
        name: faker.commerce.productName(),
        description: faker.company.catchPhraseDescriptor(),
        fork: false,
        stargazers_count: U.random(1,100),
        watchers_count: U.random(1,100),
        language: U.sample(['javascript', 'html', 'java', 'c++', 'python', 'c#']),
        url: faker.internet.url(),
      });
    }

    let experience = [];
    let experience_count = U.random(1, 10);
    let start = M().year(U.random(2010, 2017)).month(U.random(0, 11)).format('YYYY-MM');

    for(let j = 0; j < experience_count; j++) {
      experience.push({
        industry: 'IT',
        company_name: faker.company.companyName(),
        current: U.sample([true, false]),
        country: U.sample(COUNTRY_CODE_SET),
        location: faker.address.city,
        title: faker.name.jobTitle(),
        startDate: {
          year: U.random(2010, 2017),
          month: U.random(1, 11)
        },
        endDate: {
          year: U.random(2010, 2017),
          month: U.random(1, 11)
        },
        description: faker.name.jobDescriptor()
      });
    }

    candidate = await db.Candidate.create({
      fullname: faker.name.findName(),
      email: faker.internet.email(),
      phone_mobile: faker.phone.phoneNumber(),
      avatar_path: faker.internet.avatar(),
      skills: U.sample(SKILLS_SET, U.random(5, SKILLS_SET.length)),
      location: faker.address.city(),
      locations_interested_in: locations_interested_in,
      country: U.sample(COUNTRY_CODE_SET),
      countries_interested_in: U.sample(COUNTRY_CODE_SET, U.random(1,6)),
      github_profile: {
        github_repos: github_repos
      },
      linkedin_profile: {
        headline: faker.name.jobTitle() + ' at ' + faker.company.companyName(),
        linkedin_object: {
          positions: {
            values: experience
          }
        }
      }
    });

    console.log(`Generated candidate #${i+1}: ${candidate._id}`);
  }

  console.log(`Candidate generation completed.`);
}

async function init() {
  await db_connect(config.mongo_uri);
  console.log(`Connected to MongoDB (${config.mongo_uri}).`);
  await create_candidates();
  process.exit(0);
}

init();