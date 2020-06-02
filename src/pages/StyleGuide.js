import React from "react"
import Layout from "../components/layouts"

export default function StyleGuide() {
  return (
    <Layout>
      <div className="container">
        <h1>Style Guide</h1>
        <div>
          <h2>Colour</h2>
          {/* <div>
            <div className="container-grid">
              <h3>white</h3>
              <div className="swatch"></div>
            </div>
            <div className="container-grid">
              <h3>lightest grey</h3>
              <div className="swatch swatch-lightest-grey"></div>
            </div>
            <div className="container-grid">
              <h3>light grey</h3>
              <div className="swatch swatch-light-grey"></div>
            </div>
            <div className="container-grid">
              <h3>dark grey</h3>
              <div className="swatch swatch-dark-grey"></div>
            </div>
            <div className="container-grid">
              <h3>black</h3>
              <div className="swatch swatch-black"></div>
            </div>
          </div> */}
        </div>
        <div>
          <h2>Typography</h2>
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>
              Paragraph. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Iure quo beatae voluptate expedita provident cupiditate,
              nostrum consequatur repellat nesciunt dicta enim esse non quia
              fuga porro nisi excepturi cumque illum?
            </p>
            <blockquote>Block Quote</blockquote>
            <ul>
              <li>This is an unordered list</li>
              <li>This is an unordered list</li>
              <li>This is an unordered list</li>
            </ul>
            <ol>
              <li>This is an ordered list</li>
              <li>This is an ordered list</li>
              <li>This is an ordered list</li>
            </ol>
          </div>
        </div>
        <div>
          <h2>Elements</h2>
          <div>
            <h3>Links</h3>
            <div>
              <a href="#">Regular Link</a>
            </div>
            <div>
              <button href="#">Link Button</button>
            </div>
            <div>
              <a href="#">
                <div>Block Link</div>
              </a>
            </div>
            <h3>Form Elements</h3>
            <div className="w-form">
              <form
                id="email-form-2"
                name="email-form-2"
                data-name="Email Form 2"
              >
                <input
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  className="hide-button w-button"
                />
                <div className="form">
                  <label for="node">Label for Text Input</label>
                  <input
                    type="text"
                    id="node"
                    maxlength="256"
                    className="input w-input"
                  />
                </div>
                <div className="form">
                  <label for="email">Label for Textarea</label>
                  <textarea
                    id="field"
                    name="field"
                    placeholder="Example Text"
                    maxlength="5000"
                    className="input textarea w-input"
                  ></textarea>
                </div>
                <div className="form">
                  <label>Label for Checkboxes</label>
                  <label className="w-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      data-name="Checkbox"
                      className="w-checkbox-input"
                    />
                    <span for="checkbox" className="w-form-label">
                      Checkbox
                    </span>
                  </label>
                  <label className="w-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox-2"
                      name="checkbox-2"
                      data-name="Checkbox 2"
                      className="w-checkbox-input"
                    />
                    <span for="checkbox-2" className="w-form-label">
                      Checkbox 2
                    </span>
                  </label>
                </div>
                <div className="form">
                  <label>Label for Radio Buttons</label>
                  <label className="w-radio">
                    <input
                      type="radio"
                      id="radio"
                      name="radio"
                      value="Radio"
                      data-name="Radio"
                      className="w-radio-input"
                    />
                    <span for="radio" className="w-form-label">
                      Radio
                    </span>
                  </label>
                  <label className="w-radio">
                    <input
                      type="radio"
                      id="radio-2"
                      name="radio"
                      value="Radio 2"
                      data-name="Radio"
                      className="w-radio-input"
                    />
                    <span for="radio-2" className="w-form-label">
                      Radio 2
                    </span>
                  </label>
                </div>
                <div className="form">
                  <label>Label for Select Menu</label>
                  <select
                    id="field-2"
                    name="field-2"
                    className="input w-select"
                  >
                    <option value="">Select one...</option>
                    <option value="First">First Choice</option>
                    <option value="Second">Second Choice</option>
                    <option value="Third">Third Choice</option>
                  </select>
                </div>
                <div className="form">
                  <input
                    type="submit"
                    value="Submit Button"
                    data-wait="Please wait..."
                    className="button w-button"
                  />
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-grid go-block">
          <h2 className="entry-title">Images</h2>
          <div>
            <div className="container-grid">
              <h3>Logo</h3>
              <div>
                {/* <img
                  className="logo"
                  src="#"
                  alt="logo"
                  width="8rem"
                  height="8rem"
                /> */}
              </div>
            </div>
            <div className="container-grid">
              <h3>Self-portrait</h3>
              <div>{/* <img src="#" alt="self portrait" /> */}</div>
            </div>
            <div className="container-grid">
              <h3>Cover</h3>
              <div>{/* <img src="#" alt="Cover" width="1200" /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
