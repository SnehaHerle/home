import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Code from '../../editable-stuff/Code.jpg'



const ProjectCard = ({ value }) => {
  const [updated_at, setUpdatedAt] = useState("0 mints");

  const handleUpdatetime = useCallback(
    (e) => {
      const date = new Date(value.pushed_at);
      const nowdate = new Date();
      const diff = nowdate.getTime() - date.getTime();
      const hours = Math.trunc(diff / 1000 / 60 / 60);

      if (hours < 24) {
        return setUpdatedAt(`${hours.toString()} hours ago`);
      } else {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        return setUpdatedAt(`on ${day} ${monthNames[monthIndex]} ${year}`);
      }
    },
    [value.pushed_at]
  );

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  const { name, description, svn_url, stargazers_count, languages_url } = value;

  var projectImage;
  if (name === "home"){
    projectImage = <img src="https://lh3.googleusercontent.com/nZJSjkdHo3uZqbKoa-ChnSexdnWpvQRzIv65neRmVdr3OQSxjfqC9oUMWiwyPpS_NdG8sEUBD1LsZnf_zC8ziS3zcSB0TyqlRQhQd0taYjbrbZZM-hzmz4all5CKUAYdKDPXOXC6iAUfkWGlDyUdsHAEkkulqjoEREDkJ241TiLliaIeqivrwKOBC_FelB6iZ32W1wAEUIopQXcvHbi9VfAMQ4qnu4P5ooRe4t7tTxhA41C-VLZ6o6mInZPP7lO6cASBBiIReK5EYYOj8R-dNaq_2hNiov-vxOrCdWivFOGIS4wcN9vlhs2m3Ko5BGH-twJfiXXx9oT8YfLZ3pZHjXcrp1jrTVmHt3O025Fnv-KNbTIF0DKN8DFAH8YIjSSi9uRq8eTZ2J6H0v-WQ2tfRE7vjfIWDFYH3pvpJlXtoG6KPmrtSqSTiP_VAwCfWzDs509EFnAtSC9tUv6vumOn2sFFFa7VwywbSeVNeD7LeJuWkAxyJgH8F0dNz61J7J4pgOwrqIA4RqdanZfeUwp3uYi88RNRJXA6_MXE35gv3Nmkftvv8icVFmGeoCA5TO8-NZJ48P24vETrKxd6c4MaPzHurPiwlsvUjGy91LJw1_pT77OShAWENF7tOrv-1YHWlbhW5CMcJyknvsb0QywXnXhI14iwVYNskAPlFUz6dI1F5b7bZ4EpICkvLchiDg=w405-h253-no?authuser=0"/>
  }
  else if(name == "instagramclone"){
    projectImage = <img src="https://lh3.googleusercontent.com/g3_gexgeKk5MZeerLvnRZmgOmijl1HCOKmLQh8rRnjf_3t6ns14gziBAbzmpGWHd5o6BsxH_orEIjx3DFlnPb8wnSGkzFDoEOTKxjgGwIIQ1EZIng-J5GNaopp5YGOKjgIcIk58zx5VE7hWRp7ki58BucDr5UwChypxLqkAcS6EgNdwhYu0NvHAnkNHqitsttHCjEJ3U9CelOBBSrJdPk0GHhrrk4Kr5nnG9fMvIeg5oai8Zi9Wn7AkofFvB37ddBEZCA_3uftFb4S1o-iF2FQ13lMR752GqPp74zaQB9zu3soN3bvR9E3HSFga11r_-01fmC1L0K_n9XLWeItC1kQatsBAt7g55DqZBrBTjyJSwtcpQ-4jiRNbGQSN0bXXLpiO5-sOcVZKrmmTFO6T-Sbn17GHvRRCNxATKbea8xCDYK1zYtrltPAIr_UPBUfuB25R_GFdXSuSjR_W6VfCJbgPcyXqs5OEz28W8HTnXzo5bZ02F_T35CXZb8XXC7ITG2OYGB4aVWj9kk83FGmE9jTWEU4CJpGzYEWtfEIgwoySQ5iBkueY-JLslPnXZ_tYiuv7rwe-9ImPvNW_m_J_IgiIigBrpc0gT2A__3TDayjZf682r2OHXboTSlsJnTLG_msNYAvbvuAaD1VC_at5MBJiIryRlvMJFSIkC_DqCE-WGzvryd0S0k6qJiFygvQ=w405-h253-no?authuser=0"/>
  }
  else if(name =="utkarsh-saxena"){
    projectImage = <img src="https://lh3.googleusercontent.com/xyep60FSESTbn-102JU0pEe9EtvpEIF81rfx6dfhp_cFjpLOv3aAI0vFndCmslreZarCnNtnPX_OZd01WNb6HxScqQn3tF6OX554gMwcUVt3CBVxP7Ska6UjZ3-k83TgoCZjRRDCi9JHid05SX2G9h7TzwfdCG0wj4JpypRFoMxv34tdfnVJsWaQH1yRdGZ1x3nJ57cIcn4XLmliASkY1lEJU5qjwTJsxcptG2nsIKXe2pBC5_u6hzmsYgPhEaFgGtGSGUn5clRLU5HZoHxDt48eQDp-WTCewLS8X1GyqG6kfEdI2t-FzRfIScX7F61ghmkuEgBXtKYe8Q5HvzsxHDLH57OoY6iAsPFWZyODQq8wyqR3KnR47aLnJfyaLDlU-KB2CF9SKNv26aeOO71kY1spT5JAmD1HItJXzhVhNmiINC1yPze5MwO5LELa1MW2DjreU0lZa6NKMf4r3DfOE22SxOBI_On5rEqrE_gLJ2uIBnmNTPIatkypF18MAg28hAV9g2tt0dlCrBzu0ksXCcdRnsblo7ecLyIjGodT4AOyCWAPMp5ypu_3ysGIrH4epGA37HjjlFUEEa7UPf2-aY_vbaImhEf9qm-tlJobPKR7utQWISokpz-PPc7HRPup16_V8OP-PqvUWvtoRwVw2CnUlQ7m0gbnrqr0vIrVbm-DVUVSjuDtSvGWZccMGQ=w405-h253-no?authuser=0"/>
  }
  else if(name == "my-first-blog"){
    projectImage = <img src="https://lh3.googleusercontent.com/XkZ6ew3UnIIIQZJYed67IwWPVewlQcLCsqyw9kAVH8zvtzo4EX5kspSAUcJ7GU-EwJF03twozvDGGM48XwNg-1sSdoGXmP-9WWB61ULn3FNvz-WEshApV0Ky7T7e5ZmFcl2EV9ny55XSkopWIYzZoVwh5NqRMA3I_7YxigN6bO6udHRSSJ5Eqvk9q_EldQyekB_hxuiupB-ae8LAs6OdLJSjbHfew0spYZiCoibU6W6fbe0XvzA4rBP0Y4PMbfvT9u--Y9t-ByWo4XR2q1XoN9b5E2OEBbrQdB7lAAIbb_Tg44co5YcPB1MfMIXjvkzKbdPPfGNCQggzt3AzdC-x4izlPTvuO8SjeUdt9h1lTex3Hk7MrcXMf5u15icxyyHEcdJgB37A4WDVrnIxTdkInE5IMvP_aZDZzdE627EjqZW3ktplh2xZiZp1n814tA1VdF-7JDTp6654dtVXhvgPU2n28gjfUCkHutzDhrsDD0922YZGtAdqJ_zUolqLB9_3dal8yhSz_07T7M9MJa9WDo43aHEUE20M15MZcSp44FdnlfjSeAAklxXu3ph_QXpq3pIkA_tl9Dm8KHX_Zkhfx2bMDmo3V6YX4jEDFTnAWYm-Nr3PAiiPGnokHbOCOa7ITLDnmFZjuf25hiI89MO2n8cBeK6f10f4O0mR0T2j_2l1PzbGRPbwu8908F15qA=w433-h243-no?authuser=0"/>
  }
  else if(name == "CodeChef"){
    projectImage = <img src={Code}/>
  }
  else if(name == "LeetCode"){
    projectImage = <img src={Code}/>
  }

  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body" style={{overflow:"hidden"}}>
          <h5 className="card-title">{name} </h5>
          <p className="card-text">{description} </p>
          <div style={{alignItems:"center"}}>{projectImage}</div>
          <br></br>
          <a
            href={`${svn_url}/archive/master.zip`}
            className="btn btn-outline-secondary mr-3"
          >
            <i className="fab fa-github" /> Clone Project
          </a>
          <a
            href={svn_url}
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i className="fab fa-github" /> Repo
          </a>
          <hr />
          <Language value={languages_url}></Language>
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              <i className="fab fa-github" /> Stars{" "}
              <span className="badge badge-dark">{stargazers_count}</span>
            </span>
            <small className="text-muted">Updated {updated_at}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

const Language = ({ value }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(
    (e) => {
      axios
        .get(value)
        .then((response) => {
          // handle success
          // console.log(response.data);
          return setData(response.data);
        })
        .catch((error) => {
          // handle error
          return console.error(error.message);
        })
        .finally(() => {
          // always executed
        });
    },
    [value]
  );

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
    // console.log(index, this.state.data[index]);
  }
  // console.log("array contains ", array, this.state.data[array[0]]);

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.map((language) => (
        <p key={language} className="badge badge-light card-link">
          {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
        </p>
      ))}
    </div>
  );
};

export default ProjectCard;
