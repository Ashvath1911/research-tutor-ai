import { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
  outcomeCategorical: boolean;
  pairedGroups: boolean;
  numGroups: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { outcomeCategorical, pairedGroups, numGroups } = req.body as RequestBody;
  if (typeof outcomeCategorical !== 'boolean' || typeof pairedGroups !== 'boolean' || !numGroups) {
    return res.status(400).json({ error: 'Invalid parameters' });
  }
  const n = Number(numGroups);
  let test = '';
  let rationale = '';

  if (outcomeCategorical) {
    // categorical outcome
    if (n <= 1) {
      test = 'Chi-square goodness-of-fit test';
      rationale = 'Assesses whether the observed categorical distribution differs from an expected distribution for a single group.';
    } else if (n === 2) {
      if (pairedGroups) {
        test = "McNemar’s test";
        rationale = 'Used for paired categorical data to test for differences on a dichotomous variable between two related groups.';
      } else {
        test = 'Chi-square test of independence';
        rationale = 'Tests for an association between two categorical variables when comparing two independent groups.';
      }
    } else {
      test = 'Chi-square test of independence';
      rationale = 'Tests for an association between two categorical variables across more than two independent groups.';
    }
  } else {
    // continuous outcome
    if (n <= 1) {
      test = 'One-sample t-test';
      rationale = 'Determines whether the sample mean differs significantly from a known or hypothesized population mean.';
    } else if (n === 2) {
      if (pairedGroups) {
        test = 'Paired t-test';
        rationale = 'Compares the means of two related groups to determine whether there is a statistically significant difference between these means.';
      } else {
        test = 'Independent samples t-test';
        rationale = 'Compares the means of two independent groups to see if there is a statistically significant difference between them.';
      }
    } else {
      test = 'One-way ANOVA';
      rationale = 'Determines whether there are statistically significant differences between the means of three or more independent groups.';
    }
  }

  return res.status(200).json({ test, rationale });
}
