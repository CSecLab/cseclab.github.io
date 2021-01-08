
# ARES

ARES is a black-box tool that uses Deep Reinforcement Learning to test and explore Android applications.

## Abstract

The state space of Android apps is huge and its thorough exploration during testing remains a major challenge. In fact, the best exploration strategy is highly dependent on the features of the app under test. Reinforcement Learning (RL) is a machine learning technique that learns the optimal strategy to solve a task by trial and error, guided by positive or negative reward, rather than by explicit supervision. Deep RL is a recent extension of RL that takes advantage of the learning capabilities of neural networks. Such capabilities make Deep RL suitable for complex exploration spaces such as the one of Android apps. However, state of the art, publicly available tools only support basic, tabular RL. We have developed ARES, a Deep RL approach for black-box testing of Android apps. Experimental results show that it achieves higher coverage and fault revelation than the baselines, which include state of the art RL based tools, such as TimeMachine and Q-Testing. We also investigated qualitatively the reasons behind such performance and we have identified the key features of Android apps that make Deep RL particularly effective on them to be the presence of chained and blocking activities.

# Results

The source code is available on "[https://github.com/H2SO4T/ARES](GitHub)".
For more information please contact andrea.romdhana(A)dibris.unige.it.

# Publication

More details about **ARES** can be found in the pre-print paper "[Deep Reinforcement Learning for Black-Box Testing of Android Apps](https://arxiv.org/abs/2101.02636)"
Please use the following bibtex entry to cite our work:
```BibTex
@misc{romdhana2021deep,
      title={Deep Reinforcement Learning for Black-Box Testing of Android Apps}, 
      author={Andrea Romdhana and Alessio Merlo and Mariano Ceccato and Paolo Tonella},
      year={2021},
      eprint={2101.02636},
      archivePrefix={arXiv},
      primaryClass={cs.SE}
}
```

# Team

Andrea Romdhana, University of Genova & FBK Security and Trust Unit, Italy
Alessio Merlo, University of Genova
Mariano Ceccato, Università di Verona, Italy
Paolo Tonella, Università della Svizzera italiana, Switzerland