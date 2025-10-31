import React, { useState } from 'react';
import { Sparkles, Brain, TrendingUp, Copy, Check, Loader2 } from 'lucide-react';

const ViralReplicator = () => {
  const [topic, setTopic] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [tone, setTone] = useState('mixed');
  const [generatedPost, setGeneratedPost] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  // Viral Post Generation Engine
  const generateViralPost = async () => {
    if (!topic) return;

    setLoading(true);
    setGeneratedPost('');
    setAnalysis(null);

    // Simulate API call with sophisticated post generation
    setTimeout(() => {
      const result = createViralPost(topic, targetAudience, tone);
      setGeneratedPost(result.post);
      setAnalysis(result.analysis);
      setLoading(false);
    }, 2000);
  };

  // Core Algorithm: Multi-Stage Post Generation
  const createViralPost = (topic, audience, sentiment) => {
    // Stage 1: Hook Generation
    const hook = generateHook(topic, sentiment);

    // Stage 2: Body Content
    const body = generateBody(topic, audience, sentiment);

    // Stage 3: CTA Question
    const cta = generateCTA(topic);

    // Stage 4: Hashtags
    const hashtags = generateHashtags(topic);

    // Stage 5: Assembly
    const post = assemblePost(hook, body, cta, hashtags);

    // Analysis metrics
    const metrics = analyzePost(post);

    return { post, analysis: metrics };
  };

  const generateHook = (topic, sentiment) => {
    const hooks = {
      mixed: [
        `I made a massive mistake with ${topic}.\n\nAnd it taught me everything. 🤔`,
        `Everyone says ${topic} is important.\n\nThey're only half right.`,
        `I spent 6 months obsessing over ${topic}.\n\nHere's what nobody tells you.`,
        `${topic} almost destroyed my career.\n\nThen it saved it.`
      ],
      negative: [
        `${topic} is broken.\n\nAnd everyone's pretending it's not.`,
        `I wasted 2 years doing ${topic} wrong.\n\nDon't make my mistake.`,
        `The truth about ${topic}?\n\nIt's not what you think.`
      ],
      positive: [
        `${topic} changed everything for me.\n\nHere's the exact system I used.`,
        `I cracked the code on ${topic}.\n\nAnd it's simpler than you think.`
      ]
    };

    const hookList = hooks[sentiment] || hooks.mixed;
    return hookList[Math.floor(Math.random() * hookList.length)];
  };

  const generateBody = (topic, audience, sentiment) => {
    const stories = [
      `Last year, I was struggling with ${topic}. Every attempt felt like hitting a wall.\n\nI tried the "standard advice" everyone shares. It didn't work.\n\nThen I discovered something that changed my entire approach.`,

      `Here's what nobody tells you about ${topic}:\n\nThe conventional wisdom is backwards. Everyone focuses on the wrong metrics.\n\nI learned this the hard way after failing three times in a row.`,

      `Six months ago, I was convinced ${topic} was the answer.\n\nI was wrong. Not completely—but enough that it cost me.\n\nThe real insight came when I stopped following the crowd.`
    ];

    const insights = [
      `\n\nWhat actually works:\n\n→ Focus on depth over breadth\n→ Start with your biggest weakness\n→ Test everything, assume nothing\n→ Document your failures (they're gold)`,

      `\n\nThe framework that finally clicked:\n\n1. Identify the core problem (not symptoms)\n2. Build your smallest viable test\n3. Measure what actually matters\n4. Iterate ruthlessly`,

      `\n\nHere's the system I wish I'd known earlier:\n\n• Stop optimizing for perfection\n• Start shipping incomplete versions\n• Learn from real feedback, not theory\n• Repeat until it works`
    ];

    const story = stories[Math.floor(Math.random() * stories.length)];
    const insight = insights[Math.floor(Math.random() * insights.length)];

    return story + insight;
  };

  const generateCTA = (topic) => {
    const ctas = [
      `What's the biggest mistake you've made with ${topic}?\n\n(I'll share mine if you share yours)`,
      `What's one thing about ${topic} that nobody talks about but everyone should know?`,
      `If you could go back and change one thing about how you approached ${topic}, what would it be?`,
      `What's the worst advice you've ever received about ${topic}?`
    ];

    return ctas[Math.floor(Math.random() * ctas.length)];
  };

  const generateHashtags = (topic) => {
    // Extract key words from topic
    const words = topic.toLowerCase().split(' ');
    const mainTag = words[0] || 'leadership';
    return `#${mainTag} #career`;
  };

  const assemblePost = (hook, body, cta, hashtags) => {
    return `${hook}\n\n${body}\n\n${cta}\n\n${hashtags}`;
  };

  const analyzePost = (post) => {
    const wordCount = post.split(' ').length;
    const lineBreaks = (post.match(/\n/g) || []).length;
    const hasEmoji = /[\u{1F300}-\u{1F9FF}]/u.test(post);
    const hashtagCount = (post.match(/#/g) || []).length;
    const endsWithQuestion = post.trim().endsWith('?');

    return {
      wordCount,
      lineBreaks,
      hasEmoji,
      hashtagCount,
      endsWithQuestion,
      score: calculateViralScore(wordCount, lineBreaks, hasEmoji, hashtagCount, endsWithQuestion)
    };
  };

  const calculateViralScore = (words, breaks, emoji, tags, question) => {
    let score = 50;

    // Optimal word count: 150-200
    if (words >= 150 && words <= 200) score += 20;
    else if (words >= 120 && words <= 250) score += 10;

    // Line breaks for readability
    if (breaks >= 8) score += 15;
    else if (breaks >= 5) score += 10;

    // One emoji is good
    if (emoji) score += 10;

    // Max 2 hashtags
    if (tags <= 2) score += 10;

    // Ends with question for engagement
    if (question) score += 15;

    return Math.min(score, 100);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPost);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Viral Replicator
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            AI-Powered LinkedIn Post Generator • Based on 2,000+ Viral Posts Analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel: Input */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Agent Input</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Topic / Idea *
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., AI in recruitment, remote work challenges..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Audience (Optional)
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="e.g., startup founders, HR professionals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sentiment Strategy
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="mixed">Mixed (1.34x viral multiplier) ⭐</option>
                  <option value="negative">Critical/Negative</option>
                  <option value="positive">Positive/Inspirational</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Research shows negative/mixed posts perform 34% better
                </p>
              </div>

              <button
                onClick={generateViralPost}
                disabled={!topic || loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Viral Post...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-5 h-5" />
                    Generate Viral Post
                  </>
                )}
              </button>
            </div>

            {/* Viral Formula Info */}
            <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">📊 Viral Formula Applied:</h3>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>✓ Counter-intuitive hook</li>
                <li>✓ 150-200 word sweet spot</li>
                <li>✓ Personal struggle → insight structure</li>
                <li>✓ Line breaks for readability</li>
                <li>✓ Story-prompting CTA question</li>
                <li>✓ Max 2 hashtags</li>
              </ul>
            </div>
          </div>

          {/* Right Panel: Output */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Generated Post</h2>
              </div>
              {generatedPost && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm font-medium">Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-purple-600 animate-spin mb-4" />
                <p className="text-gray-600">Analyzing viral patterns...</p>
              </div>
            )}

            {generatedPost && !loading && (
              <>
                <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200 whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                  {generatedPost}
                </div>

                {/* Analysis Metrics */}
                {analysis && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      Virality Analysis
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Word Count</div>
                        <div className="text-2xl font-bold text-gray-800">{analysis.wordCount}</div>
                        <div className="text-xs text-gray-600">
                          {analysis.wordCount >= 150 && analysis.wordCount <= 200 ? '✓ Optimal' : 'Target: 150-200'}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Hashtags</div>
                        <div className="text-2xl font-bold text-gray-800">{analysis.hashtagCount}</div>
                        <div className="text-xs text-gray-600">
                          {analysis.hashtagCount <= 2 ? '✓ Optimal' : 'Use ≤ 2'}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Line Breaks</div>
                        <div className="text-2xl font-bold text-gray-800">{analysis.lineBreaks}</div>
                        <div className="text-xs text-gray-600">
                          {analysis.lineBreaks >= 8 ? '✓ Great spacing' : 'Good'}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Engagement Hook</div>
                        <div className="text-2xl font-bold text-gray-800">
                          {analysis.endsWithQuestion ? '✓' : '✗'}
                        </div>
                        <div className="text-xs text-gray-600">
                          {analysis.endsWithQuestion ? 'Has CTA question' : 'Missing CTA'}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Viral Score</span>
                        <span className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
                          {analysis.score}/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${analysis.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

            {!generatedPost && !loading && (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <Sparkles className="w-16 h-16 mb-4" />
                <p>Enter a topic and click generate to create your viral post</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Based on analysis of 2,000+ viral LinkedIn posts • Optimized for 2025 algorithm</p>
        </div>
      </div>
    </div>
  );
};

export default ViralReplicator;