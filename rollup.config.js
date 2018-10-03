import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

const license = `/**
 * Social Reviews v1.0
 * =========
 * A compact solution for showing social reviews
 *
 * Credits
 * -------
 * Arjun Komath (@arjunz)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 Techulus
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */`

const common = {
	input: 'src/index.js',
	output: {
		format: 'umd',
		name: 'SocialReview',
		sourcemap: true
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		commonjs(),
		resolve()
	]
}

export default [
	{
		...common,
		output: {
			...common.output,
			file: 'bin/social-reviews.js'
		}
	},
	{
		...common,
		output: {
			...common.output,
			file: 'bin/social-reviews.min.js'
		},
		plugins: [
			...common.plugins,
			uglify(
				{
					output: {
						beautify: false,
						preamble: license
					}
				},
				minify
			)
		]
	}
]
