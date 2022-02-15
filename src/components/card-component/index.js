import React from "react";
import { defaultData } from "../../utils/utils";
import "./index.css";

const CardComponent = () => {
  return (
    <main class="parentContainer">
      {/* section one */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[0].image}
            />
          </div>
          <div class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text1">FACEBOOK:</p>
                <p class="text1">TWITTER:</p>
                <p class="text2">REMARKS:</p>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[0].name}</p>
                <p class="text3">{defaultData[0].fbHandle}</p>
                <p class="text3">{defaultData[0].tHandle}</p>
                <p class="text4">{defaultData[0].remark}</p>
              </div>
            </div>
          </div>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[1].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[1].name}</p>
                <p class="text3">{defaultData[1].fbHandle}</p>
                <p class="text3">{defaultData[1].tHandle}</p>
                <p class="text4">{defaultData[1].remark}</p>
              </div>
            </div>
          </section>
        </div>

        {/* card three */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[2].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[2].name}</p>
                <p class="text3">{defaultData[2].fbHandle}</p>
                <p class="text3">{defaultData[2].tHandle}</p>
                <p class="text4">{defaultData[2].remark}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* section two */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[3].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[3].name}</p>
                <p class="text3">{defaultData[3].fbHandle}</p>
                <p class="text3">{defaultData[3].tHandle}</p>
                <p class="text4">{defaultData[3].remark}</p>
              </div>
            </div>
          </section>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[4].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[4].name}</p>
                <p class="text3">{defaultData[4].fbHandle}</p>
                <p class="text3">{defaultData[4].tHandle}</p>
                <p class="text4">{defaultData[4].remark}</p>
              </div>
            </div>
          </section>
        </div>

        {/* card three */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[5].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[5].name}</p>
                <p class="text3">{defaultData[5].fbHandle}</p>
                <p class="text3">{defaultData[5].tHandle}</p>
                <p class="text4">{defaultData[5].remark}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* section three */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[6].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[6].name}</p>
                <p class="text3">{defaultData[6].fbHandle}</p>
                <p class="text3">{defaultData[6].tHandle}</p>
                <p class="text4">{defaultData[6].remark}</p>
              </div>
            </div>
          </section>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[7].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[7].name}</p>
                <p class="text3">{defaultData[7].fbHandle}</p>
                <p class="text3">{defaultData[7].tHandle}</p>
                <p class="text4">{defaultData[7].remark}</p>
              </div>
            </div>
          </section>
        </div>

        {/* card three */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[8].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[8].name}</p>
                <p class="text3">{defaultData[8].fbHandle}</p>
                <p class="text3">{defaultData[8].tHandle}</p>
                <p class="text4">{defaultData[8].remark}</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* section three */}
      <div class="sectionOneParent">
        {/* card one */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[9].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <div class="textLeft">
                  <p class="text1">NAME:</p>
                  <p class="text1">FACEBOOK:</p>
                  <p class="text1">TWITTER:</p>
                  <p class="text2">REMARKS:</p>
                </div>
              </div>
              <div class="textRight">
                <p class="text3">{defaultData[9].name}</p>
                <p class="text3">{defaultData[9].fbHandle}</p>
                <p class="text3">{defaultData[9].tHandle}</p>
                <p class="text4">{defaultData[9].remark}</p>
              </div>
            </div>
          </section>
        </div>

        {/* card two */}
        <div class="container">
          <div class="sectionOne">
            <img
              alt="profile"
              className="pictureView"
              src={defaultData[10].image}
            />
          </div>
          <section class="sectionTwo">
            <div class="textParent">
              <div class="textLeft">
                <p class="text1">NAME:</p>
                <p class="text1">FACEBOOK:</p>
                <p class="text1">TWITTER:</p>
                <p class="text2">REMARKS:</p>
              </div>

              <div class="textRight">
                <p class="text3">{defaultData[10].name}</p>
                <p class="text3">{defaultData[10].fbHandle}</p>
                <p class="text3">{defaultData[10].tHandle}</p>
                <p class="text4">{defaultData[10].remark}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CardComponent;
