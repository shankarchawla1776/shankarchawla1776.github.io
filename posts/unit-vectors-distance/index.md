---
title: On the approximate orthogonality of uniformly distributed unit vectors in high dimensions
date: 2026-05-15
---

Consider two unit vectors $X,Y \in \mathbb{R}^d$. Let $X$ and $Y$ be independently and uniformly distributed on the unit hypersphere. That is, $X, Y \overset{\text{i.i.d}}{\sim} \text{Unif}(\mathbb{S}^{d-1})$. Recall that if $X$ and $Y$ are orthogonal, then $X \cdot Y = 0$. Defining $\lambda_d := X \cdot Y$, we will find that it is difficult to estimate $\lambda_d$ for a particular choice of $d$ (though a closed form using non-elementary functions does exist). Note that $X$ and $Y$ are orthogonal with probability $0$ for any finite $d$. However,  we hope to show that $X \cdot Y \to 0$ in probability as $d \to \infty$.  



<!-- We hope to determine the expectation $\mathbb{E} [\lVert X-Y \rVert]$. In particular, we will find that it is difficult to compute the expectation for a specific choice of $d$. However, as $d \to \infty$, the expectation monotonically approaches a constant from below. We will determine the value of this constant.  -->

<!-- Since $\lVert X \rVert = \lVert Y \rVert = 1$, see that  -->
<!-- $$ -->
<!-- \lVert X-Y \rVert = \sqrt{2 - 2 (X \cdot Y)} = \sqrt{2} \sqrt{(1 - (X \cdot Y))}. -->
<!-- $$ -->

<!-- $(1 - (X \cdot Y))^{\frac{1}{2}}$ can be represented by the binomial series with the condition of convergence being $|X \cdot Y| < 1$. Since $X$ and $Y$ are both unit vectors, $|X \cdot Y| = |\cos(\theta_{X, Y})| \leq 1$. However, since $X$ and $Y$ are uniformly and randomally distributed, $\mathbb{P}(X=Y) = \mathbb{P}(X = - Y) = 0$. Thus, $\mathbb{P}(|X \cdot Y| < 1) =1$, and the series representation of$(1 - (X \cdot Y))^{\frac{1}{2}}$ always converges to the function. Expanding,  -->
<!-- $$ -->
<!-- \mathbb{E} [\lVert X-Y \rVert] = \sqrt{2} \left( \sum^\infty_{n=0} (-1)^n \binom{\frac{1}{2}}{n} \mathbb{E}[(X \cdot Y)^n] \right) -->
<!-- $$  -->
<!---->
<!-- Since $X$ and $Y$ are uniformly distributed vectors, $\mathbb{E} [X_k] = \mathbb{E} [Y_k] = \mathbb{E} [X \cdot Y] = 0$. Moving to the second order term, see that  -->
<!-- $$ -->
<!-- \mathbb{E}[(X \cdot Y)^2] =  \sum^d_{k=1} \sum^d_{j=1} \mathbb{E}[X_k Y_k X_j Y_j].  -->
<!-- $$ -->

<!-- Uniformity guantees that $\mathbb{E}[X_i^2] = \mathbb{E}[X_m^2]$ for all $i,m \in {1, 2, \dots, d}$ where $i \neq m$.  -->
<!---->
<!---->
<!-- We have shown that $\mathbb{E}[X \cdot Y] =0$ and $\mathbb{E}[(X \cdot Y)^2] = \frac{1}{d}$. It follows that  -->
<!-- It suffices to show that if $X \cdot Y \to 0$ as $d \to \infty$, then $\mathbb{E}[\lVert X-Y \rVert] \to \sqrt{2}$.  -->

$\lambda_d$ is a scalar random variable, so
$$
\text{Var}(\lambda_d) = \mathbb{E}[(X \cdot Y)^2] - (\mathbb{E}[X \cdot Y])^2.
$$

Since $X$ is uniformly distributed on the unit hypersphere, the vectors $X$ and $-X$ have the same distribution. This means that $X_k$ is as likely to be observed as $-X_k$. Because of this, $\mathbb{E}[X_k] = \mathbb{E}[-X_k] = - \mathbb{E}[X_k]$ which implies that $\mathbb{E}[X_k] = \mathbb{E}[Y_k] = 0$. Thus, $\mathbb{E}[X \cdot Y] = \sum^d_{k=1} \mathbb{E}[X_k] \mathbb{E}[Y_k] = 0$. 

To handle $\mathbb{E}[(X \cdot Y)^2]$, see that due to independence, $\mathbb{E}[X_k X_j Y_k Y_j] = \mathbb{E}[X_k X_j] \mathbb{E}[Y_k Y_j]$. Additionally, $\mathbb{E}[X_k X_j] = \mathbb{E}[(-X_k) X_j] = -\mathbb{E}[X_k X_j]$ implies that $\mathbb{E}[X_k X_j] = 0$ for $k \neq j$. $\lVert X \rVert = 1$, so 
$$
\sum^d_{k=1} \mathbb{E}[X_k^2] = d \mathbb{E}[X_k^2]  = 1 \Longrightarrow \mathbb{E}[X_k^2] = \frac{1}{d}.
$$

Expanding, 
$$
\mathbb{E}[(X \cdot Y)^2] = \sum^d_{k=1} \sum^d_{j=1} \mathbb{E} [X_k X_j] \mathbb{E}[Y_k Y_j].
$$

All terms where $k \neq j$ are $0$. Thus, when $k = j$, $\mathbb{E}[X_k X_j] = \mathbb{E}[X_k^2]$ which means the sum simplifies to 
$$
\mathbb{E}[(X \cdot Y)^2] = \sum^d_{i=1} \left( \frac{1}{d} \right)^2 =  d \left( \frac{1}{d^2} \right) = \frac{1}{d}.
$$
It follows that $\text{Var}(\lambda_d) = \frac{1}{d}$. 
Fixing some arbitrary $\epsilon \in (0, \infty)$, by Chebyshev's inequality, 
$$
\mathbb{P}(|\lambda_d - \mathbb{E}[X \cdot Y]| \geq \epsilon) \leq \frac{\sigma^2}{\epsilon^2} = \frac{\text{Var}(\lambda_d)}{\epsilon^2} = \frac{1}{d \epsilon^2} .
$$
See that by the squeeze theorem,

$$
0 \leq \lim_{d \to \infty} \mathbb{P}(|\lambda_d| \geq \epsilon) \leq \lim_{d \to \infty} \frac{1}{d \epsilon^2} \Longrightarrow \lim_{d \to \infty} \mathbb{P}(|\lambda_d| \geq \epsilon) = 0.
$$

We have shown that $\lambda_d \to 0$ in probability as $d \to \infty$. Thus, uniformly distributed unit vectors become approximately orthogonal with high probability in high dimensions. 

<!-- Define $\lambda_d := X \cdot Y$. Recall that $\lVert X-Y \rVert = \sqrt{2 - 2 \lambda_d}$. Technically, $\lambda_d \in (-1,1)$ since $\mathbb{P}(X = Y) = \mathbb{P}(X = -Y) = 0$. However, for the purposes of this bound, we will say that $\lambda_d \in [-1,1]$ such that $0 \leq \sqrt{2 - 2 \lambda_d} \leq 2$. We have shown that $\lambda_d \to 0$ as $d \to \infty$, so  -->
<!-- $$ -->
<!-- \mathbb{E}[\sqrt{2 - 2 \lambda_d} - \sqrt{2}] \to 0, -->
<!-- $$ -->
<!-- and we may conclude that -->
<!-- $$ -->
<!-- \lim_{d \to \infty} \mathbb{E}[\lVert X-Y \rVert] = \sqrt{2}. -->
<!-- $$ -->
<!---->
<!-- The real conclusion here is a way of showing that in high dimensions, uniformly distributed unit vectors are almost always orthogonal, since if $X \perp Y$, then $\lVert X-Y \rVert = \sqrt{2}$. -->

There are, of course, [much cleaner and more direct ways to do this proof](https://math.stackexchange.com/questions/995623/why-are-randomly-drawn-vectors-nearly-perpendicular-in-high-dimensions/995678#995678), but they require much more intuition. I think this is a fairly mechanical but fun way to show this conclusion. I find it cool how this proof can be understood with only basic knowledge of linear algebra and probability, as even Chebyshev's inequality is not too difficult to prove. 

<!--  In thinking about this problem, I found that one way to show that the sequence of expectations converges to $\sqrt{2}$ from below as $d \to \infty$ is to use the power series representation of $\mathbb{E}[\sqrt{1 - \lambda_d}]$ which is the expectation of the binomial series at $k = \frac{1}{2}$. It is fairly easy to show that all odd order terms are $0$, and all of the even order terms are both negative and vanish as $d \to \infty$, meaning that $\sqrt{2} \mathbb{E}[\sqrt{1 - \lambda_d}] < \sqrt{2}$ for some fininte $d \in \mathbb{N}$. -->

Below are the results of a simple Python simulation showing empirically the conclusion derived above. 

<img src="/posts/unit-vectors-distance/mosaic_dot.png" alt="Mosaic" style="max-width:680px;width:100%;height:auto;display:block;margin:1.5em auto 0.5em auto;">
<em style="display:block;text-align:center;font-size:14px;color:#888;margin-bottom:1.5em;">Empirical distributions of $X \cdot Y$ for $d \in \{10^1, 10^2, 10^3, 10^4, 10^5 \}$.</em>


![Convergence of expected distance to $\sqrt{2}$](convergence_dot.png)
*$X \cdot Y$ over choices of $d$.* 
One might ask as to how the sequence $(\lambda_d)_{d=1}^{\infty}$ converges to $0$. Recall that $\text{Var}(\lambda_d) = \frac{1}{d}$. Since $\mathbb{E}[\lambda_d] = 0$, the rate at which $\lambda_d$ approaches $0$ is on the order of $\sigma = \sqrt{\text{Var}(\lambda_d)} = \frac{1}{\sqrt{d}}$.



Consider also the fact that for orthogonal unit vectors, $\lVert X-Y \rVert = \sqrt{2}$. An interesting finding is that although $X \cdot Y$ converging in probability to $0$  implies that $\lVert X-Y \rVert$ converges in probability to $\sqrt{2}$, $\mathbb{E}[X \cdot Y] = 0$ for all finite $d$ whereas $\mathbb{E}[\lVert X-Y \rVert]$ monotonically approaches $\sqrt{2}$ from below as $d \to \infty$. This is also not very difficult to show. 

<!-- Another cool observation is that the sequence defined by $a_d := \mathbb{E}[\lVert X-Y \rVert]$ is bounded, monotonic, and has the property $\lim_{d \to \infty} a_d = \sqrt{2} \notin \mathbb{Q}$. This is an example of the monotone convergence theorem in the wild. That is, an example of how a sequence of this kind must converge to some constant in $\mathbb{R}$, not $\mathbb{Q}$. -->


